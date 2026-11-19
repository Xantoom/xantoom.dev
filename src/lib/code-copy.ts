/** Adds a copy button to every code block inside article content. */
export function initCodeCopy(): void {
  const lang = document.documentElement.lang;
  const labels = lang.startsWith("fr")
    ? { copy: "Copier", copied: "Copié" }
    : { copy: "Copy", copied: "Copied" };

  for (const pre of document.querySelectorAll<HTMLPreElement>("[data-prose] pre")) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy";
    button.textContent = labels.copy;
    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText ?? pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = labels.copied;
        button.dataset.done = "";
        setTimeout(() => {
          button.textContent = labels.copy;
          delete button.dataset.done;
        }, 1600);
      } catch {
        /* clipboard blocked: leave the button as is */
      }
    });
    pre.append(button);
  }
}
