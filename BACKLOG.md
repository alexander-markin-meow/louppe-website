# Louppe Media Culler website backlog

This is the live backlog for the Louppe website. Keep it separate from the app
backlog: website work can ship independently, while public product claims must
always describe the latest released app rather than the app worktree.

## Before the public launch

- [x] Publish a restrained visual set: Gallery, Grid, a captioned 25-second
  walkthrough, and a 1200×630 sharing image. Future App Store candidates stay local.
- [x] Add Open Graph and large-image Twitter metadata using the sharing image.
- [x] Publish the approved Quiet darkroom design with Gallery, Grid, and Demo
  sharing one viewer. Keep download links pointed at the latest release.
- [ ] Add a short comparison section covering local operation, no account,
  no Homebrew dependency, metadata filtering, and XMP handoff.

## Launch and support

- [ ] Run the existing publicity plan after the visual assets and release-copy
  checks are complete.
- [x] Add the optional Revolut donation link.

## Implemented locally, awaiting publication

- [ ] **WEB-AUD-01 — Publish and verify the consent-reconciliation fix.**
  The 29 September audit's W1 implementation and 11 script regressions are complete
  locally; all 12 website tests pass. Include the changed consent script and dated
  cache keys in the next requested website publication. After deployment, check two
  real tabs: opt-in loads the tag, withdrawal/removal/expiry disables the other tab
  before another download event, and rejection while loading stays rejected. Verify
  no analytics request before opt-in and preserve the HTTPS production-host gate.
  Quota-failure and delayed-event refusals have VM coverage; if storage refuses
  both writes and removal, a refusal can persist only for the current visit.

## Routine maintenance

- [ ] With every public app release, review requirements and feature claims.
- [ ] Keep screenshots, requirements, and download links aligned with the published build.
- [ ] Review capture provenance in the media notes after each release.
  The owner requested removal of visible version notices and installation
  instructions from the landing page on 2026-09-26.

## Completed baseline

The site already has a direct release download, macOS and
Apple-silicon requirements, privacy and MIT-license claims, real app previews,
and a captioned Demo view. Keep those claims maintained rather than reopening
them as tasks.
