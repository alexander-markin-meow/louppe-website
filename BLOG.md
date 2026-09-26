# Blog publishing

## Decision

Keep the blog at **https://louppe.eu/blog/** on the existing GitHub Pages site.
Use `/blog/<slug>/` for permanent article URLs. A quiet `blog` link lives in the
header and footer; the app download remains the landing page's main action.

There is no running backend, database or admin login. Authored Markdown and a
small metadata list are turned into static HTML before publication. Git stores
published revisions. This keeps the existing host, domain and deployment, and
adds one development dependency, [Marked](https://marked.js.org/). It never runs
in the visitor's browser. GitHub Pages is designed for
[static HTML, CSS and JavaScript](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

A CMS is unnecessary for one author and occasional posts. Revisit that decision
if multiple people need a browser editor, scheduled publishing or editorial roles.
RSS, comments, subscriptions and newsletters are deliberately out of scope for now.

## Files

- `content/posts.json`: published metadata, newest dates first in generated output
- `content/posts/<file>.md`: published article text, edited as ordinary Markdown
- `templates/blog.html`: shared page shell and privacy controls
- `blog.css`: reading layout, alongside the landing page's shared styles
- `scripts/build-blog.mjs`: generator for article pages, index and sitemap
- `blog/`: generated, committed public pages; do not edit them directly
- `.drafts/`: local, gitignored article drafts and a separate `posts.json`
- `_preview/`: local, gitignored copy of the site with drafts included

Published Markdown is trusted author content, not visitor input. Never feed user
submissions into this renderer. Public source files are readable in the public
repository, so drafts must remain in `.drafts/` until publication is approved.
Noindex is only a secondary precaution: keeping drafts out of Git is what prevents
publication. Back up valuable drafts separately; Git does not back them up.

## Local writing and preview

```sh
npm ci
npm run preview:blog
python3 -m http.server 8766 --bind 127.0.0.1 --directory _preview
```

Open `http://127.0.0.1:8766/blog/`. Preview pages are noindex, carry a draft notice,
and cannot load production analytics. Drafts never enter the sitemap.
The 1.9 introduction is at `/blog/a-proper-hello/` in this local preview only.

Each metadata record contains:

```json
{
  "slug": "a-permanent-slug",
  "title": "An article title",
  "description": "A short introduction for the index and sharing previews",
  "file": "article.md",
  "status": "draft",
  "cta": {
    "label": "Try Louppe",
    "href": "https://github.com/alexander-markin-meow/louppe-media-culler/releases/latest/download/Louppe.zip"
  }
}
```

The shared article layout has one Alex Markin byline after the text, linked to
https://alex-markin.com/, followed by a centered call-to-action button without small print. The body uses natural
sentence case and contractions, while retaining the site's punctuation preference:
periods between sentences, none at the ends of headings or paragraphs.

## Publish an approved article

1. Review the wording and check release claims against the published app. The
   first draft is written as a 1.9 launch article, at the owner’s request. Keep it
   unpublished until the release is available and the article is approved.
2. Copy the approved Markdown into `content/posts/` and its record into
   `content/posts.json`. Set `status` to `published` and add the actual publication
   `date` in `YYYY-MM-DD` form. Remove the local draft record to avoid duplicate slugs.
3. Run `npm run build:blog` and `npm run test:blog`. Check the resulting pages.
   Future dates and incomplete metadata fail the build instead of silently publishing.
4. Commit only the intended source, generated `blog/` files and `sitemap.xml` on
   `main`, then push. GitHub Pages continues to serve static files via `.nojekyll`.
5. Confirm the Pages build and live article and links.

The build step runs locally before committing; GitHub does not install Node or
rebuild the blog. Publishing remains explicit. Generated-file tracking removes
stale article HTML if an approved article is withdrawn from the content list.
The generator owns the sitemap; add future non-blog pages there as the site grows.

## Keep consistent

Regenerate the blog after changes to its template. When changing shared consent
markup, update both `index.html` and `templates/blog.html`; keep the existing
`analytics-consent.js` as the single behaviour owner. Bump CSS cache keys in both
pages when changing shared styles. No article needs the landing page's `site.js`.
