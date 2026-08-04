# louppe.eu design system

Dark, serif, quiet, and compact. Static HTML + CSS with no build step.

## voice

- lowercase throughout, except proper nouns and technical names where lowercase is confusing
- understated and direct; no exclamation marks or emoji

## visual language

- pure black background with warm grey text
- olive is reserved for section headings and compact meta/subheader lines
- Source Serif 4 for reading text; IBM Plex Mono for titles, headings, tags, and footer
- 44px mono display title on desktop, 32px on mobile
- 12px mono section headings and 11px mono row tags
- dotted leaders connect row labels to their tags
- borders use the existing warm-black inset palette; no shadows or gradients

## layout

- centered 1100px page shell with a responsive two-column grid
- 44px vertical and 64px horizontal grid rhythm
- columns collapse naturally on narrow screens
- footer uses a three-part mono grid and collapses to two columns on mobile

## page identity

Louppe is the page's only display title. The compact olive line beneath it is the product
subheader. Alex Markin appears only as a quiet author link in the footer.

## assets

The demo uses `.demo-placeholder` until a real screenshot or GIF is ready. Replace the
placeholder with the real media rather than preserving it alongside the asset.

## cache busting

Use dated `?v=YYYYMMDD` query strings for `styles.css` and `site.js`; append `-N` for
additional changes shipped on the same day.
