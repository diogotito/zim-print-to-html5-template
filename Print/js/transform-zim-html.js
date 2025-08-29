// Remove all <br> and empty <p>
const emptyLines = document.querySelectorAll("br, p");
for (const el of emptyLines) {
    if (el.textContent.trim() === "") {
        el.remove();
    }
}

// Turn all <u> into <mark>
for (const u of document.querySelectorAll("u")) {
    const mark = document.createElement("mark");
    mark.innerHTML = u.innerHTML;
    u.replaceWith(mark);
}

// Turn all <tt> into <code>
for (const tt of document.querySelectorAll("tt")) {
    const code = document.createElement("code");
    code.innerHTML = tt.innerHTML;
    tt.replaceWith(code);
}

// Demote Created ... paragraph
const hgroup = document.querySelector("section hgroup");
for (const p of document.querySelectorAll("hgroup + p")) {
    if (p.innerText.startsWith("Created ")) {
        hgroup.insertAdjacentHTML(
            "beforeend",
            `<p><time>${p.innerText.substr(8)}</time></p>`
        );
        p.remove();
    }
}

// Convert Zim Code Blocks to Prism code blocks
for (let code of document.querySelectorAll(".zim-object > pre > code[class]")) {
    // Move <pre> outside of <div class="zim-object">
    let pre = code.parentElement
    let zimObject = pre.parentElement
    zimObject.parentElement.insertBefore(pre, zimObject)
    zimObject.parentElement.removeChild(zimObject)

    // Prepend "lang-" to code's class
    code.className = `lang-${code.className}`
}