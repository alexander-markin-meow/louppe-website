# louppe.eu design system

Dark, direct, and intentionally simple. Static HTML + CSS with no build step.

## voice

- lowercase throughout, except proper nouns and technical names where lowercase is confusing
- concise and practical; no exclamation marks or emoji
- explain the product before explaining implementation details

## visual language

- pure black base with the animated mesh-and-grain background adapted from the background trial
- bright purple is the sole accent color, used for headings, links, tags, and focus states
- the mesh uses muted teal, violet, and red blobs; these atmospheric colors are not reused as interface accents
- the demo placeholder alone uses a neutral grey surface; feature and action lists remain open and unboxed
- system sans-serif for display and reading text; IBM Plex Mono for compact labels, tags, and footer details
- large, compact display title with close but non-overlapping letterforms and simple type hierarchy beneath it
- soft 12px corners on the demo placeholder; no decorative dividers or action cards

## background effect

- document-length decorative stage behind the page, ignored by assistive technology and pointer input
- on scroll the stage offsets by 0.3× the scroll distance, so it travels at roughly 70% of content speed
- six independent blobs run distinct 22–38s animations with different sizes, directions, scale changes, and phases
- mesh blobs retain a 42px blur and use varied opacity rather than a duplicated second layer
- colors: `#649d87`, `#534c74`, and `#a44642`, sampled from the chosen trial settings
- grain: 512px tile, 0.16 strength, screen blended, 840ms resample motion, 0.65 frequency, 4 octaves, with strong contrast and reduced brightness for visible fine specks without a grey veil
- disable mesh and grain motion when the visitor prefers reduced motion

## layout

- one centered reading column at every viewport width
- 720px maximum content width with generous outer margins
- sections follow one linear product story: introduction, features, demo, and download
- feature items stay stacked with open spacing and no dividers
- download and code are plain text rows, never cards or buttons
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
