# louppe.eu design system

Bright, direct, and intentionally simple. Static HTML + CSS with no build step.

## voice

- lowercase throughout, except proper nouns and technical names where lowercase is confusing
- concise and practical; no exclamation marks or emoji
- explain the product before explaining implementation details

## visual language

- warm near-white page with dark plum text
- vivid purple is the sole accent color, used for headings, links, tags, and focus states
- pale lavender surfaces distinguish supporting content without shadows or gradients
- system sans-serif for display and reading text; IBM Plex Mono for compact labels, tags, and footer details
- large, compact display title with simple type hierarchy beneath it
- soft 12px corners and light purple-grey borders

## layout

- one centered reading column at every viewport width
- 720px maximum content width with generous outer margins
- sections follow one linear product story: introduction, features, demo, and download
- feature items stay stacked and use light dividers instead of dotted leaders
- footer is a simple flexible row and stacks only when space is tight

## page identity

Louppe is the page's only display title. The purple line beneath it is the product
subheader. Alex Markin appears only as a quiet author link in the footer.

## assets

The demo uses `.demo-placeholder` until a real screenshot or GIF is ready. Replace the
placeholder with the real media rather than preserving it alongside the asset.

## cache busting

Use dated `?v=YYYYMMDD` query strings for `styles.css` and `site.js`; append `-N` for
additional changes shipped on the same day.
