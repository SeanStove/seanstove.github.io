---
name: Sean Stove
description: The original seanstove.be rebuilt in code, with teal duotone face crops cut by drawn diagonals and Lato in its 2015 voice.
colors:
  white: "#ffffff"
  ink: "#14211e"
  teal: "#0e715f"
  teal-deep: "#0a5a4b"
  teal-light: "#17ba9d"
  mint: "#dff7f1"
  mint-soft: "#c4f0e5"
typography:
  display:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 11.5vw, 10.25rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4.0625rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.02em"
  subline:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 2.0625rem)"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "0.2em"
  mail:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 900
  title:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 900
    letterSpacing: "0.1em"
  body:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  small:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  square: "0px"
spacing:
  gutter: "clamp(16px, 5vw, 64px)"
  cut: "clamp(56px, 10vw, 180px)"
  edge-offset: "16px"
  container: "1200px"
components:
  button-outline-white:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 24px"
    height: "48px"
  button-outline-white-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.teal}"
  button-outline-teal:
    backgroundColor: "transparent"
    textColor: "{colors.teal}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 24px"
    height: "48px"
  button-outline-teal-hover:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
  nav-link:
    textColor: "{colors.teal}"
    typography: "{typography.label}"
  top-bar:
    backgroundColor: "{colors.white}"
    height: "84px"
  skill-icon:
    textColor: "{colors.white}"
    size: "72px"
  colophon:
    backgroundColor: "{colors.teal-deep}"
    textColor: "{colors.mint-soft}"
    typography: "{typography.small}"
    padding: "20px 0"
---

# Design System: Sean Stove

## Overview

**Creative North Star: "Origineel, vernieuwd"**

The 2015 seanstove.be, rebuilt properly. The page is a run of flat fields, white, teal and deep teal, separated by straight diagonal cuts. The cuts are drawn in code with `clip-path` and each one carries a thin light-teal line running parallel to it, 16px off the edge. Sean's own portrait appears twice as teal duotone crops: the lower face behind the hero type, and a half-face crop (the left half of the face as seen) beside the contact block, cut off by the page's right edge as in the 2015 original, its background and cheek side dissolving into deep teal. Lato speaks in the original's voice: heavy uppercase display, light tracked uppercase sublines, bold tracked caps for labels and buttons, plain regular body.

Density is low and the page is one long scroll. Text columns are narrow and offset, alternating left, right, left across Over, Skills and Contact, so the reader zigzags down the page the way the cuts do. There are no cards, no shadows and no rounded corners. Depth comes only from the cuts, the overlaps between sections, and a soft scrim behind the hero type. Motion is a single signature: on load the hero's bottom edge sweeps from flat into its diagonal while the line draws along it. After that, each further line draws once as it scrolls into view.

This world deliberately replaces the earlier "profile sheet" direction (ruled ink on white, Schibsted Grotesk). That direction was rejected, and nothing from it carries over.

**Key Characteristics:**
- Flat teal and white fields joined by straight diagonal cuts, never curves.
- One light-teal 3px line parallel to every cut, offset 16px.
- Teal duotone crops of Sean's own portrait, with the color baked into the raster.
- Lato in four roles: 900 display, 300 tracked subline, 700 tracked caps, 400 body.
- Square outline buttons, white on teal and teal on white.
- Motion is limited to the cut sweep, the line draws and one staggered type rise.

## Colors

A single-hue palette: one brand teal in three depths, a light teal kept for the line, two mints for secondary text on teal, and white and ink.

### Primary
- **Brand Teal** (teal): the identity color (binding per PRODUCT.md). It fills the hero (under the photo) and the Skills band. It is also the color of the nav, of links and outline buttons on white, of the focus ring, the text selection, the scrollbar and the theme color.
- **Deep Teal** (teal-deep): the Contact field and the colophon strip. It is the darkest field, so the page settles there at the bottom.

### Secondary
- **Line Teal** (teal-light): appears only as the diagonal edge line and in the brightest tones of the duotone photos. It is never a fill, a text color or a button color.

### Neutral
- **White** (white): the page ground, the top bar and the Over section. Also the text and outline-button color on teal fields.
- **Ink** (ink): body text on white. A green-tinted near-black, and also the darkest stop of the contact duotone.
- **Mint** (mint): secondary text on teal fields (the role line under the hero, the Skills intro, the Contact lead and company address, the mail hover).
- **Soft Mint** (mint-soft): the most muted text on teal. Used for legacy skill items and the colophon text and links.

### Duotone ramps (baked into rasters)
- **Hero crop** (`img/hero-face.webp`): #0a2c26 > #0c5e50 > #0e715f > #17ba9d at stops 0 / .30 / .62 / 1. This is the darker ramp, chosen because white type sits on it.
- **Contact crop** (`img/contact-face.webp`, 900 × 1374, the left half of the face as seen, source x0-1310 y1000-3000): #14211e > #0e715f > #17ba9d > #dff7f1, the full brand ramp, ink to mint.
- Both crops are made from `img/profile.JPG` with a levels stretch from the 1st to the 99th percentile, saved as WebP q0.8. Each recipe is kept in the image's `.json` sidecar.

### Named Rules
**The Line-Only Rule.** Light teal (#17ba9d) is used only for the diagonal line and the photo highlights. Once it fills a surface or colors text, the line stops being special.

**The Baked Duotone Rule.** The duotone lives in the raster and is never produced with CSS `filter`, `mix-blend-mode` or overlay tints. A new photo gets a new crop baked from the source portrait with one of the two ramps, and its recipe goes in a `.json` sidecar.

**The Two Fields Rule.** Every surface is white, teal or deep teal, with no grays and no tinted panels. Ink is a text color only.

## Typography

**Display Font:** Lato 900 (with Segoe UI, system-ui, sans-serif)
**Body Font:** Lato 400 (same stack)
**Label Font:** Lato 700, uppercase and tracked

**Character:** A single humanist sans used at its extremes. The heavy 900 caps shout the greeting and the section names, and the 300 tracked caps under them read almost like engraved lettering. Self-hosted latin subsets in four weights (300, 400, 700, 900) with `font-display: swap`. The 900 and 400 files are preloaded.

### Hierarchy
- **Display** (900, clamp(4.5rem, 11.5vw, 10.25rem), 0.95, -0.01em, uppercase): only "HALLO," in the hero, centered.
- **Headline** (900, clamp(2.25rem, 4.6vw, 4.0625rem), 1, 0.02em, uppercase): the section names OVER, SKILLS and CONTACT. Teal on white, white on teal.
- **Subline** (300, clamp(1.25rem, 2.4vw, 2.0625rem), 1.3, 0.2em, tightening to 0.12em at 640px and below, uppercase, balanced wrap): the hero question under HALLO.
- **Mail** (900, clamp(1.5rem, 3vw, 2.25rem)): the email address in Contact, white with a 2px underline.
- **Title** (900, 1rem, 0.1em, uppercase): skill column headings.
- **Body** (400, 1.0625rem, 1.7; 1rem at 640px and below): prose in columns of 560 to 640px. Bold 700 marks key phrases only.
- **Label** (700, 0.9375rem for buttons, 0.875rem for the nav, 1rem for the hero role line, 0.1em, uppercase): buttons, nav and the hero role line.
- **Small** (400, 0.8125rem): the colophon.

### Named Rules
**The Original Voice Rule.** Each weight has one job: 900 for shouted caps, 300 for tracked sublines, 700 for tracked labels, 400 for reading. Uppercase belongs to display, headlines, sublines, titles and labels, and never to body prose.

## Layout

The container is `wrap`: max 1200px, centered, with gutter padding (clamp(16px, 5vw, 64px)). Prose columns are deliberately offset instead of centered. Over sits inset from the left (max(gutter, 18vw), max 640px). The Skills intro is right-aligned and inset from the right (max 620px). The Contact body is inset from the left again (max 560px). The skill grid is the one centered element: 3 columns, max 1080px, gaps of clamp(48px, 6vw, 80px) vertically and clamp(24px, 4vw, 56px) horizontally, with centered text.

**The cut system.** The cut height (cut, clamp(56px, 10vw, 180px)) sets the depth of every diagonal and drives the section padding and overlaps.
- **Hero to Over:** the bottom edge falls from left to right, `polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - cut))`. Over pulls up by 0.35 × cut into the white wedge.
- **Over to Skills and Skills to Contact:** the top edge rises to the right, `polygon(0 cut, 100% 0, 100% 100%, 0 100%)`. Contact pulls up by a full cut, so its diagonal lands on the Skills band's extended bottom padding.
- **The line:** a `preserveAspectRatio="none"` SVG one cut tall, spanning the full width, drawing a single line from corner to corner (inset 3% at each end). It sits 16px below the hero cut, in the white wedge, and 16px above each rising cut.

The hero is clamp(520px, 50vw, 760px) tall and centers its type stack. The top bar is 84px tall (68px at 640px and below), with the monogram on the left and the nav on the right.

**Breakpoints:**
- **900px:** the skill grid drops to 2 columns.
- **760px:** the contact photo leaves its right half, stacks below the text at 320px tall, and its mask fade turns vertical.
- **640px:** body drops to 1rem, the bar to 68px and the monogram to 32px. The nav shrinks to 0.8125rem with 0.06em tracking, the hero subline to 0.12em, and Over's overlap to 8px. The Skills intro becomes left-aligned and the skill grid a single column.
- **Print:** the bar, skip link, chevron, edge lines and buttons are hidden. Clip-paths are removed, rise targets are forced visible, and colors print exactly.

### Named Rules
**The Parallel Line Rule.** Every diagonal cut gets exactly one light-teal line parallel to it, 3px wide with `vector-effect: non-scaling-stroke`, 16px off the cut. A cut without its line, or a line without a cut, is off-system.

**The Straight Cut Rule.** Section boundaries are straight diagonals drawn with `clip-path` and sized by the cut token. No curves, no waves, and no baked shape images.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth comes from three sources: sections overlapping across their diagonals, the duotone photographs, and one scrim. The hero scrim is a radial gradient confined to the type block (`radial-gradient(ellipse 46% 52% at 50% 36%, rgba(8,40,34,.62) 0%, rgba(8,40,34,.38) 55%, transparent 100%)`). It deepens the photo only behind the type, so the highlights stay bright everywhere else. The contact half-face sits at the image's right edge, cut off by the page's right edge, and its background and cheek side dissolve into the deep teal field (#0a5a4b) through a short horizontal mask (`linear-gradient(to right, transparent 0%, #000 18%)`), which becomes vertical (`to bottom, transparent 0%, #000 35%`) at 760px and below.

### Named Rules
**The Flat Field Rule.** Fields never cast shadows. If something needs separation, use a cut, a color change or the colophon's 1px rule. A scrim is allowed only where type sits on a photo, and only as large as the type block.

## Shapes

Every corner is square (0px): buttons, fields, photos and the skip link. The recurring silhouette is the trapezoid made by a diagonal cut. The only other strokes are the 2px outline on buttons, the 1px mint rule at 35% opacity above the colophon, and the hero chevron, a wide open V drawn with a 1.5 stroke (64 × 32px).

**The skill icons** are the six original glyphs, redrawn as inline SVG on a 512 grid at 72px in `currentColor`. Five are filled shapes with evenodd holes that read as outlines. The Azure cloud is a 46-unit stroke scaled to match their weight. Together they form one outline-weight family. A new icon must match this weight, not come from a generic icon set.

### Named Rules
**The Square Corner Rule.** Radius is 0 everywhere. A rounded corner reads as a template and breaks the cut geometry.

## Components

### Buttons
Square, outlined and tracked: the original's outline button.
- **Shape:** square corners (0px), 2px border in `currentColor`, minimum height 48px, 24px horizontal padding.
- **White outline (on teal):** white text and border, transparent fill. Used in the hero and in Contact.
- **Teal outline (on white):** teal text and border, transparent fill. Used in Over.
- **Hover:** the outline fills with its own color and the text flips (white to teal, or teal to white), over 0.25s with the ease-out curve.
- **Focus:** 2px teal outline offset 3px, white inside any teal field.
- The single call to action is "Download CV", repeated at each section.

### Navigation
- **Top bar:** white, 84px, with the folded S monogram (`img/logo.jpg`, 40px wide, 32px at 640px and below) linking to the top.
- **Links:** OVER / SKILLS / CONTACT in 700 tracked teal caps at 0.875rem, gap clamp(20px, 5vw, 72px). Hover adds a 2px underline offset 0.4em. The nav stays visible at every width, with no hamburger menu.
- **Skip link:** a teal block with white text, hidden above the viewport until focused.

### Inline links
Teal with a 1px underline offset 0.2em, thickening to 2px on hover. On teal fields, the mail link is white with a 2px underline and turns mint on hover.

### Hero
Teal field behind a full-bleed duotone crop (object-position 50% 30%) with the scrim behind the type. Top to bottom: HALLO (display), the subline question, the role line (label, mint), the white outline button, then the chevron.

### Skill column
Open columns, not cards: a 72px white glyph, a title heading, then lists at 1.75 line-height. List groups are separated by 12px. Legacy items close the column in soft mint at 0.9375rem.

### Contact
Deep teal field with the half-face crop filling its right half (object-position 100% 30%). The face is anchored to the image's right edge and cut off by the page edge, like the 2015 original. The 18% left mask fade dissolves the background and cheek side into deep teal toward the text, so the face reads as emerging from the field rather than as a framed photo. Then come the lead in mint, the email address at mail scale, the company address in mint, and the white outline button.

### Colophon strip
Deep teal, with a 1px rule of mint at 35% opacity on top, 20px vertical padding and small text in soft mint. Company and VAT on the left, "Naar boven" on the right, wrapping on narrow screens. Links turn white on hover.

### Motion (signature)
The ease for everything is [0.16, 1, 0.3, 1], also used as the CSS transition curve. The library is motion.dev's mini `animate` build (v14.6.0).
- **Hero sweep:** the clip-path animates from flat to the diagonal over 1.2s, delay 0.15s.
- **Edge lines:** each line unclips from left to right (`inset(0 100% 0 0)` to `inset(0 0% 0 0)`) over 1.1s. The hero line starts at 0.35s. The other lines draw once, when they enter the viewport (rootMargin -15% at the bottom).
- **Hero type:** rises 14px and fades in over 0.8s, staggered 0.08s from a 0.1s start.
- **Fallback:** without JavaScript, or with reduced motion, everything shows its final state. A head script sets `.motion` only when motion is allowed and clears it after 2.5s as a failsafe. Smooth scrolling also respects reduced motion.

## Do's and Don'ts

### Do:
- **Do** separate sections with straight diagonal cuts sized by the cut token, and give every cut its parallel light-teal line 16px off.
- **Do** make the hero fall from left to right, and make the following cuts rise to the right.
- **Do** bake any new portrait crop from `img/profile.JPG` with one of the two duotone ramps (the darker hero ramp wherever white type sits on it), and record its recipe in a `.json` sidecar.
- **Do** keep Lato to its four roles: 900 uppercase display and headlines, 300 tracked uppercase subline, 700 tracked caps labels, 400 body.
- **Do** use square outline buttons: white on teal, teal on white, filling on hover.
- **Do** keep text columns narrow (560 to 640px) and offset, alternating sides down the page.
- **Do** keep a teal field's secondary text in mint and its most muted text in soft mint.
- **Do** make every animation end in a final state that is already correct without JavaScript, with the [0.16, 1, 0.3, 1] ease and no repeat.

### Don't:
- **Don't** use light teal (#17ba9d) as a fill, text or button color. It is the line and the photo highlights only.
- **Don't** tint photos with CSS filters, blend modes or color overlays. Only the radial type scrim may darken a photo.
- **Don't** add shadows, rounded corners or cards.
- **Don't** draw curved or wavy section edges, or bake cut shapes into images.
- **Don't** introduce grays or a second hue. Surfaces are white, teal or deep teal.
- **Don't** replace the six original skill glyphs with a stock icon set, or mix in icons of a different weight.
- **Don't** loop or re-trigger the line draws. Each line draws once.
