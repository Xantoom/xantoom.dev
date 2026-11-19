/** Adds a copy button (icon only, labelled for screen readers) to every code block in an article. */
const ICONS = {
  copy: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g>',
  check:
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/>',
};

const svg = (body: string) =>
  `<svg class="icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">${body}</svg>`;

export function initCodeCopy(): void {
  const labels = document.documentElement.lang.startsWith("fr")
    ? { copy: "Copier le code", copied: "Copié" }
    : { copy: "Copy code", copied: "Copied" };

  for (const pre of document.querySelectorAll<HTMLPreElement>("[data-prose] pre")) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy";
    const reset = () => {
      button.innerHTML = svg(ICONS.copy);
      button.setAttribute("aria-label", labels.copy);
      button.title = labels.copy;
      delete button.dataset.done;
    };
    reset();
    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText ?? pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.innerHTML = svg(ICONS.check);
        button.setAttribute("aria-label", labels.copied);
        button.title = labels.copied;
        button.dataset.done = "";
        setTimeout(reset, 1600);
      } catch {
        /* clipboard blocked: leave the button as is */
      }
    });
    pre.append(button);
  }
}
