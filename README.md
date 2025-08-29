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

<!-- width="2269" height="1050" -->
<!-- alt="Zim's default HTML template used for printing vs this HTML template" -->
<img alt="Zim's default HTML template used for printing vs this HTML template" src="https://github.com/user-attachments/assets/98804b31-2ac6-4b74-95b1-dc723b9a177d" />

<!--
> I actually think this looks a bit too "modern" for my tastes
as it loses a lot of information density
and the resulting aesthetics feel a bit bland,
but I made this as a proof of concept
-->

## Usage

Put the files of this repo in the directory for HTML templates in your Zimwiki.
Its path might end with `share/zim/templates/html`.
