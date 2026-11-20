/**
 * Progressive enhancements for article bodies ([data-prose]):
 * - Code block header (filename / language) and fixed copy button outside the scroll container
 * - Responsive scrollable wrapper for Markdown tables
 * - Clickable section anchors on h2/h3 headings
 * - Native <dialog> lightbox for <Figure> images
 */
const ICONS = {
  copy: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g>',
  check:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/>',
  link: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g>',
  close:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6 6 18M6 6l12 12"/>',
};

const svg = (body: string, size = 16) =>
  `<svg class="icon" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${body}</svg>`;

export function initCodeCopy(): void {
  const prose = document.querySelector<HTMLElement>("[data-prose]");
  if (!prose) return;

  const copyLabel = prose.dataset.copy ?? "Copy code";
  const copiedLabel = prose.dataset.copied ?? "Copied";
  const headingLinkLabel = prose.dataset.headingLink ?? "Copy link to this section";
  const linkCopiedLabel = prose.dataset.linkCopied ?? "Link copied";
  const closeLabel = prose.dataset.close ?? "Close";

  const live = document.createElement("span");
  live.className = "sr-only";
  live.setAttribute("aria-live", "polite");
  prose.append(live);

  const announce = (message: string) => {
    live.textContent = "";
    requestAnimationFrame(() => {
      live.textContent = message;
    });
  };

  // 1. Code blocks: wrap <pre> so the copy button stays pinned while code scrolls horizontally.
  for (const pre of prose.querySelectorAll<HTMLPreElement>("pre")) {
    if (pre.parentElement?.classList.contains("code-block")) continue;
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode?.insertBefore(wrapper, pre);
    wrapper.append(pre);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy";
    const reset = () => {
      button.innerHTML = svg(ICONS.copy, 15);
      button.setAttribute("aria-label", copyLabel);
      button.title = copyLabel;
      delete button.dataset.done;
    };
    reset();

    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText ?? pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.innerHTML = svg(ICONS.check, 15);
        button.setAttribute("aria-label", copiedLabel);
        button.title = copiedLabel;
        button.dataset.done = "";
        announce(copiedLabel);
        setTimeout(reset, 1600);
      } catch {
        /* clipboard blocked: leave button as is */
      }
    });

    const title = pre.dataset.title;
    const lang = pre.dataset.lang;
    const headingText = title ?? lang;
    if (headingText) {
      const head = document.createElement("div");
      head.className = "code-head";
      const label = document.createElement("span");
      label.className = "code-title";
      label.textContent = headingText;
      head.append(label, button);
      wrapper.prepend(head);
    } else {
      wrapper.append(button);
    }
  }

  // 2. Wrap plain Markdown tables in a horizontally scrollable container.
  for (const table of prose.querySelectorAll<HTMLTableElement>(":scope > table")) {
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    wrap.tabIndex = 0;
    table.parentNode?.insertBefore(wrap, table);
    wrap.append(table);
  }

  // 3. Clickable section anchors on h2 and h3 headings.
  for (const heading of prose.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]")) {
    if (heading.querySelector(".heading-anchor")) continue;
    const anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = `#${heading.id}`;
    anchor.setAttribute("aria-label", headingLinkLabel);
    anchor.title = headingLinkLabel;
    anchor.innerHTML = svg(ICONS.link, 16);
    anchor.addEventListener("click", async (event) => {
      event.preventDefault();
      const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
      history.replaceState(null, "", `#${heading.id}`);
      heading.scrollIntoView({ behavior: "auto" });
      try {
        await navigator.clipboard.writeText(url);
        anchor.innerHTML = svg(ICONS.check, 16);
        anchor.dataset.copied = "";
        anchor.title = linkCopiedLabel;
        announce(linkCopiedLabel);
        setTimeout(() => {
          anchor.innerHTML = svg(ICONS.link, 16);
          delete anchor.dataset.copied;
          anchor.title = headingLinkLabel;
        }, 1600);
      } catch {
        /* hash still updated */
      }
    });
    heading.append(anchor);
  }

  // 4. Native <dialog> lightbox for <Figure> images.
  const zoomButtons = prose.querySelectorAll<HTMLButtonElement>("[data-figure-zoom]");
  if (zoomButtons.length > 0) {
    const dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    const body = document.createElement("figure");
    body.className = "lightbox-body";
    const fullImg = document.createElement("img");
    const caption = document.createElement("figcaption");
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "lightbox-close";
    closeBtn.setAttribute("aria-label", closeLabel);
    closeBtn.title = closeLabel;
    closeBtn.innerHTML = svg(ICONS.close, 18);
    closeBtn.addEventListener("click", () => dialog.close());
    body.append(fullImg, caption);
    dialog.append(closeBtn, body);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    document.body.append(dialog);

    const openFigure = (figure: HTMLElement) => {
      const img = figure.querySelector<HTMLImageElement>("img");
      if (!img) return;
      fullImg.src = img.currentSrc || img.src;
      fullImg.alt = img.alt;
      const text = figure.querySelector("figcaption")?.textContent?.trim() ?? "";
      caption.textContent = text;
      caption.hidden = text.length === 0;
      dialog.showModal();
    };

    for (const button of zoomButtons) {
      const figure = button.closest<HTMLElement>("figure");
      if (!figure) continue;
      button.addEventListener("click", () => openFigure(figure));
      const img = figure.querySelector<HTMLImageElement>("img");
      if (img) {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => openFigure(figure));
      }
    }
  }
}
