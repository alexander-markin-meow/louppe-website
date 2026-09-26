# Louppe Media Culler website

Standalone landing page for [Louppe Media Culler](https://louppe.eu/), a free,
open-source, keyboard-first photo, video, and audio culler for macOS. The app
itself is named Louppe.

Static HTML, CSS, and JavaScript with no build step. GitHub Pages publishes the
`main` branch, and `CNAME` assigns the custom domain.

## files

- `index.html` — page content and metadata
- `favicon.ico`, `favicon.png` — browser icons from the app’s purple grid artwork
- `styles.css` — the visual system
- `site.js` — copy-as-markdown utility
- `CNAME` — GitHub Pages custom domain
- `robots.txt`, `sitemap.xml`, and `llms.txt` — crawler and answer-engine discovery
- `DESIGN-SYSTEM.md` — design source of truth
- `BACKLOG.md` — live website work and launch-maintenance checklist

## analytics

`analytics-consent.js` loads GA4 `G-9P9KKLZ5BN` only on HTTPS `louppe.eu` after
consent. Local previews and copied deployments never load the tag. Download-link
clicks send `louppe_download`, marked as a key event in `Louppe Media Culler`.
This measures download intent, not completed downloads or installations.

Older Louppe visits were recorded in `alex-markin-personal`; use its saved
`louppe.eu historical traffic` comparison. Do not add user counts across the two
properties, since visitors can overlap.

## local preview

```sh
python3 -m http.server 8787
```
