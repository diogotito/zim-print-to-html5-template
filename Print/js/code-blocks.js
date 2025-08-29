// code-blocks.js
// Lazy load syntax highlighting with snippet-highlight for Zim's Code Blocks
// Execution should be deferred until the HTML is completely parsed

// Map Zim Code Block language names to snippet-highlight language names
const LANGUAGES = {
    python3: "python"
}

const codeBlocks = document.querySelectorAll(
    ".zim-object > pre > code[class]"
);

// Only bring snippet-highlight if there are any Code Blocks in this page
if (codeBlocks.length > 0) {
    const script = document.createElement("script");
    script.src =
        "https://unpkg.com/snippet-highlight/dist/snippet-highlight.js";
    document.head.appendChild(script);
}

// Replace all the Code Block objects with a snippet-highlight component
// when that custom component is ever loaded
customElements.whenDefined("snippet-highlight").then(() => {
    for (let block of codeBlocks) {
        let zimObject = block.parentElement.parentElement;
        let snippetHighlight = document.createElement("snippet-highlight");
        snippetHighlight.content = block.textContent;
        snippetHighlight.language = LANGUAGES[block.className] ?? block.className;
        snippetHighlight.theme = "light";
        ImWatchingYou(zimObject, snippetHighlight);
    }
});

function ImWatchingYou(zimObject, snippet) {
    new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class" &&
                mutation.target.className === "hydrated"
            ) {
                zimObject.remove();
                observer.disconnect();
            }
        }
    }).observe(snippet, { attributes: true });
    zimObject.after(snippet);
}
