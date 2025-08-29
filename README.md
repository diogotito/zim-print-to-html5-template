# Modernized Zim Print HTML template

This theme is a hack I made a few years ago
so that <kbd>Ctrl+P</kbd> "Print to HTML" in [Zim](https://zim-wiki.org/)
would generate a more modern-looking web page
instead of using the default HTML 4 template.

Based on the built-in HTML template, I mashed together:

- A CSS reset stylesheet from an `url()`
- A CSS "classless" stylesheet from an `url()`
- The existing CSS in the template
- My own customizations

each in a separate
[`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
to avoid CSS selector specificity wars.

I also made it apply syntax highlighting to Code Blocks
by applying [Prism](https://prismjs.com/) dynamically on the relevant nodes.

All external resources (stylesheets and Prism) are fetched from CDNs
to keep this template "buildless".
That means you just need to copy these files to use it,
but the fancier presentation appears with a delay
and depends on your internet connection.

## Usage

Put the files of this repo in the directory for HTML templates in your Zimwiki.
Its path might end with `share/zim/templates/html`.
