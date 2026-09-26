# Louppe website — Quiet darkroom

Static HTML, CSS and JavaScript with no build step. Approved 2026-09-26.

## Voice

- Address people working with photos, video and audio, not only photographers
- Lowercase except proper nouns, technical names and the owner's Contact label
- Full stops separate sentences; omit them at the ends of headings, lines and paragraphs
- Concise, practical copy; avoid extra captions, hints and repeated supporting text
- Credit “made by an artist” and “an independent project by Alex Markin”

## Visual language

- Dark background #080808, primary text #f3f3f3, secondary text #b0b0b0
- Brand purple #9853a6 for download buttons; #c691d2 for readable purple text and focus
- System sans-serif; no external fonts
- A large real app view is the main visual; feature sections remain open and unboxed
- 1040px maximum media width, 920px reading sections, compact centred introduction
- Responsive single-column layout on phones, with visible keyboard focus

## Grain

- Fine, monochrome 512px SVG texture in `media/grain.svg`
- Screen blend at 0.12 opacity; 0.85 frequency, three octaves, gamma 2.1
- Discrete background-position changes on the live site's 840ms cycle
- Grain stays behind all content; screenshots, video and text stay crisp
- Reduced-motion preferences disable the grain animation
- No mesh blobs or additional background colours

## Content and controls

- Header: Louppe wordmark and open-source link
- Hero: inclusive product promise, download, Apple silicon/macOS requirements
- One viewer with Gallery, Grid and Demo buttons; no autoplay
- Gallery and Grid enlarge on activation; Demo has native controls and English captions
- Switching away from Demo pauses playback; `#review-demo` still opens Demo directly
- Keep a written walkthrough with Demo; omit video/caption download buttons
- Three short workflow descriptions, a keyboard example, expandable feature details
- Closing download and artist/contact/support section
- No “how it works” navigation link, installation instructions or visible release-preview notices
- Preserve canonical/search/social metadata, latest-release download URLs and opt-in analytics
- Footer privacy control reopens analytics consent; never load analytics before consent

## Assets and delivery

Use the selected public derivatives in `media/2026-09-26/`. Preserve the media
notes as capture provenance. Original shoot files stay outside the public repo.

GitHub Pages publishes `main` at louppe.eu. Use dated `?v=YYYYMMDD-N` cache keys
for changed CSS/JavaScript. Keep CNAME, crawler metadata and download URLs intact.
