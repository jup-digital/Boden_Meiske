# Boden Meiske — Design System

Boden Meiske is the one-person flooring craft business of **Lothar Meiske**, a self-employed flooring layer ("Bodenleger") active in the **Bergisches Land** region of Germany since 1998. Brand line: **"Qualität, die bleibt."** ("Quality that stays.")

## Sources
- `Boden Meiske/Meiske_Logos/`, `Meiske_Reale Fotos/`, `Meiske_Stock-Fotos/` — the original brand-board assets (logos, own installation photos, supplementary stock photography).
- `uploads/boden-meiske-final.html` — a prior AI-generated full homepage prototype ("React Artifact" export). Its layout, component patterns and exact token values (`#AB4D34` / `#3B3F42` / `#FAFAFA`, Manrope, sharp corners, uppercase tracked-out labels) are treated as **ground truth for visual design** — this design system's components and UI kit were rebuilt to match it closely. Its placeholder copy (Hamburg address/phone, team language, city-specific testimonials) was fictional and has been replaced below with the real business details the user supplied directly in chat.
- `uploads/boden-meiske-KOMPLETT-mit-Referenzen/` — the authoritative asset export: full logo set (main/second/symbol × dark/terracotta/white) and 8 real reference-project photos (`ref_00xx.jpg`) with real captions, all now in `assets/`.
- **GitHub**: `jup-digital/boden-meiske` was linked as this project's source repository, but the GitHub tools were not yet available in this session to read it — see Caveats.
- Real business copy supplied directly by the user: the "Über mich" (about) text, the 6-question FAQ, and the 9 reference-photo captions (only 8 photos were provided for 9 captions — the 9th is listed in the FAQ/gallery data but has no matching image yet).

## Products represented
- **Marketing website** (`ui_kits/marketing-site/`, matching template at `templates/marketing-homepage/`) — a one-page site: hero, Leistungen (services), quick-CTA bar, Materialübersicht, Referenzen (gallery), Warum ich, Ablauf (process), Über mich, FAQ, Kontakt, footer.

## Components
- **Forms**: Button (sharp corners, uppercase, tracked-out), Input, Select, Textarea, Checkbox, Radio
- **Core**: Badge, Tag, Card, Eyebrow (rust line + uppercase label), FeatureCard (numbered service card, rust left-border), MaterialTile (material-overview tile)
- **Content**: Accordion, Tabs, Testimonial, StatBlock
- **Navigation**: Header (sticky, blurred), Footer (charcoal, 3-column)

### Intentional additions
- `Eyebrow`, `FeatureCard`, `MaterialTile` — lifted directly from repeating patterns in the ground-truth homepage (every section uses the rust-line eyebrow; services and materials both use a numbered/dotted tile grid), promoted to reusable components rather than one-off markup.
- `StatBlock`, `Tabs`, `Testimonial` — not present in the ground-truth page; kept from an earlier from-scratch pass as generically useful primitives for future pages. Flag if you'd rather we remove them.

## Content fundamentals
- **Language**: German, formal "Sie" address to customers.
- **Voice**: first-person **singular** — "Ich", not "wir". Lothar Meiske is a solo craftsman; there is no team, no callcenter, no sales layer. Copy should never imply staff beyond him.
- **Tone**: plain-spoken, confident, craft-proud. Short declarative sentences. Example: *"Aufmaß entscheidet. Ich messe selbst."* / *"Kein Katalog-Gedanke. Ich berate materialoffen."*
- **CTAs**: concrete, low-pressure — "Angebot anfordern", "Jetzt anfragen", never urgency/hype framing.
- **No emoji.** Minimal exclamation marks.

## Visual foundations (ground-truth accurate)
- **Color**: rust `#AB4D34` (CTAs, numerals, eyebrow lines, active accents) + charcoal `#3B3F42` (text, dark section backgrounds, footer) on warm off-white paper `#FAFAFA`.
- **Type**: Manrope only. Hero H1 is 800-weight, **uppercase**, tight tracking. Section H2 is 700-weight, tight tracking, sentence case. Nav links, buttons, eyebrows, and meta labels are all uppercase with wide letter-spacing (0.08–0.2em) — this is a signature, consistent motif.
- **Shape language**: **sharp corners everywhere** — buttons, cards, inputs, tiles have `border-radius: 0`. The only rounded shapes are small circular accents (the arrow-chip on service cards, the material-tile dot) — pill/rounded-rectangle buttons are wrong for this brand.
- **Structural motif**: hairline-grid card layouts — a container with a `rgba(59,63,66,0.08–0.12)` background and 1px gaps, filled with flush white tiles, gives a grid of dividers without individual card borders. Used for services, materials, ablauf steps.
- **Signature accent**: the numbered service card with a **4px solid rust left border** — this is a deliberate, load-bearing brand motif here (unlike the generic "avoid colored left-border cards" default advice — this source explicitly uses it).
- **Section rhythm**: every section opens with an "eyebrow" (short rust line + uppercase tracked label) above the headline.
- **Imagery**: real, on-site project photography only (no stock in the actual page) — natural light, warm oak/wood tones, construction and finished-floor shots. Full-bleed dark-charcoal-scrim hero photo with centered white wordmark logo.
- **Header**: sticky, `backdrop-filter: saturate(180%) blur(12px)` glass effect, hairline bottom border, no shadow.
- **Motion**: fast opacity/scale only — buttons dim slightly + scale to 0.98 on press; FAQ plus-icon rotates 45° to become a cross. No slides, no bounce.
- **Borders**: hairline charcoal at low opacity (`rgba(59,63,66,0.08)` default, `0.12–0.18` for stronger dividers) — never a saturated border color.
- **Dark sections**: Ablauf and the footer sit on solid charcoal full-bleed bands for rhythm against the paper background — max two background colors in the whole page (paper, charcoal).

## Iconography
No icon library. Icons are hand-set unicode/glyphs only: `↗` (arrow chip on service cards), `✦` (CTA bar), `✓` (checklist), `★` (ratings), `+` rotating to `×` (accordion). No SVG icon set, no icon font, no emoji. If a proper icon set is ever wanted, flag it — none has been provided.

## Fonts
Manrope, loaded via a Google Fonts `@import` in `tokens/typography.css` — a real, freely-licensed Google Font, no substitution needed.

## Index
- `styles.css`, `tokens/` — colors, typography, spacing, effects (incl. `--radius-none` for the brand's signature sharp corners).
- `assets/logos/` — `main-*`, `second-*`, `symbol-*` × `dark/terracotta/white` (authoritative export) plus original brand-board PNGs.
- `assets/photos/` — `gallery/ref_00xx.jpg` (8 real reference photos with captions), `hero-bg.jpg` (hero background), plus original brand-board real/stock photos.
- `components/forms/`, `components/core/`, `components/content/`, `components/navigation/` — see Components above.
- `guidelines/` — foundation specimen cards.
- `ui_kits/marketing-site/` — full homepage recreation.
- `templates/marketing-homepage/` — the same homepage as a starting-point template.
- `thumbnail.html`, `SKILL.md`.

## Caveats — please help us fix these
- **GitHub repo `jup-digital/boden-meiske` was linked but not yet read** — the GitHub tools weren't available in this session. Once they are, we should re-sync this design system against the actual repo, which likely supersedes the AI-prototype HTML as ground truth.
- **Contact details are placeholders**: phone shown as `+49 XXX XXXXXXX`, address reduced to "Bergisches Land" — the original prototype had fake Hamburg contact info we removed rather than propagate. Please send the real phone number, email, and address.
- **Service-area towns**: not listed (the prototype's Hamburg-suburb list was fictional). Tell us the real towns/radius you serve and we'll add a proper service-area chip list.
- **Testimonials/reviews section was dropped**: the prototype's 3 customer reviews were fictional (fake names, fake Hamburg addresses). We removed them rather than reuse fake quotes — send real reviews (or say "skip this section") and we'll add them back.
- **Only 8 of 9 gallery captions have a matching photo** (`ref_0017`–`ref_0040`); the 9th real caption ("Designbelag in Betonoptik — Fugenarme…") has no image yet.
- Vector logo files (`Lothar Meiske.zip`) were not extracted; PNG exports were used throughout.

**Ask**: does the rebuilt component set and homepage match your real site's structure? Once the GitHub repo is readable, tell us to re-sync — it's very likely a more complete and accurate source than the HTML prototype we built this from.
