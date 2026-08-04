# louppe.eu

Standalone landing page for [louppe](https://louppe.eu/), a free, open-source,
keyboard-first photo and video culler for macOS.

Static HTML, CSS, and JavaScript with no build step. GitHub Pages publishes the
`main` branch, and `CNAME` assigns the custom domain.

## files

- `index.html` — page content and metadata
- `styles.css` — the visual system
- `site.js` — copy-as-markdown utility
- `CNAME` — GitHub Pages custom domain
- `robots.txt`, `sitemap.xml`, and `llms.txt` — crawler and answer-engine discovery
- `DESIGN-SYSTEM.md` — design source of truth

## local preview

```sh
python3 -m http.server 8787
```
