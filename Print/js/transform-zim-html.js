
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
const hgroup = document.querySelector("header hgroup");
for (const p of document.querySelectorAll("article > header + p")) {
    if (p.innerText.startsWith("Created ")) {
        hgroup.insertAdjacentHTML(
            "beforeend",
            `<h2><time>${p.innerText.substr(8)}</time></h2>`
        );
        p.remove();
    }
}
