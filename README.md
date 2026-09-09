# Louppe Media Culler website

Standalone landing page for [Louppe Media Culler](https://louppe.eu/), a free,
open-source, keyboard-first photo, video, and audio culler for macOS. The app
itself is named Louppe.

Static HTML, CSS, and JavaScript with no build step. GitHub Pages publishes the
`main` branch, and `CNAME` assigns the custom domain.

## files

- `index.html` — page content and metadata
- `privacy/index.html` — privacy policy for the app and website
- `styles.css` — the visual system
- `site.js` — copy-as-markdown utility
- `CNAME` — GitHub Pages custom domain
- `robots.txt`, `sitemap.xml`, and `llms.txt` — crawler and answer-engine discovery
- `DESIGN-SYSTEM.md` — design source of truth
- `BACKLOG.md` — live website work and launch-maintenance checklist

## local preview

```sh
python3 -m http.server 8787
```
