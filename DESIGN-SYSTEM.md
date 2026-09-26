# Louppe website — Quiet darkroom

Static HTML, CSS, and JavaScript. Blog pages are generated from Markdown. Approved 2026-09-26.

## Voice

- Always use Oxford commas in lists of three or more items, including headings and metadata

- Address people working with photos, video, and audio, not only photographers
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

- Header: Louppe wordmark, blog, and open-source links
- Hero: inclusive product promise, download, Apple silicon/macOS requirements
- One viewer with Gallery, Grid, and Demo buttons; no autoplay
- Gallery and Grid enlarge on activation; Demo has native controls and English captions
- Demo uses its natural 16:9 shape, without cropping or padding to match the screenshots
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

## Blog

- `/blog/` contains a simple list of notes; no card grid or category clutter
- Article text uses a 680px left-aligned column, system type and the same grain
- Natural sentence case for long-form writing; contractions and first-person voice
- Preserve the no-trailing-period preference in headings and paragraphs
- One quiet byline at the top, below the subtitle, linked to Alex Markin’s website; none on the index
- One divider above the site footer; no other divider lines on blog pages
- No visible local-preview or draft notices
- Every article must have at least two centered “Try Louppe” buttons: one within the article and one at the end; no extra CTA small print
- Keep a descriptive subtitle with natural search terms
- No RSS feed or subscription features
- Drafts are local previews, never public posts until explicitly approved
