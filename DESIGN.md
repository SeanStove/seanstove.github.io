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
  core:
    fontFamily: "Lato, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4.2vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "0.01em"
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
  index-label:
    textColor: "{colors.mint}"
    typography: "{typography.label}"
  index-icon:
    textColor: "{colors.white}"
    size: "28px"
  index-item:
    textColor: "{colors.white}"
    typography: "{typography.body}"
  index-legacy:
    textColor: "{colors.mint-soft}"
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

Density is low and the page is one long scroll. Text columns are narrow and share one left reading edge, inset from the left, across Over, Expertise and Contact. The diagonals carry the movement, so the text doesn't have to zigzag. There are no cards, no shadows and no rounded corners. Depth comes only from the cuts, the overlaps between sections, and a soft scrim behind the hero type. Motion is a single signature: on load the hero's bottom edge sweeps from flat into its diagonal while the line draws along it. After that, each further line draws once as it scrolls into view, and the Expertise stack and index rows rise in once.

This world deliberately replaces the earlier "profile sheet" direction (ruled ink on white, Schibsted Grotesk). That direction was rejected, and nothing from it carries over.

**Key Characteristics:**
- Flat teal and white fields joined by straight diagonal cuts, never curves.
- One light-teal 3px line parallel to every cut, offset 16px.
- Teal duotone crops of Sean's own portrait, with the color baked into the raster.
- Lato in four roles: 900 display, 300 tracked subline, 700 tracked caps, 400 body.
- Square outline buttons, white on teal and teal on white.
- Motion is limited to the cut sweep, the line draws and staggered rises, each played once.

## Colors

A single-hue palette: one brand teal in three depths, a light teal kept for the line, two mints for secondary text on teal, and white and ink.

### Primary
- **Brand Teal** (teal): the identity color (binding per PRODUCT.md). It fills the hero (under the photo) and the Expertise band. It is also the color of the nav, of links and outline buttons on white, of the focus ring, the text selection, the scrollbar and the theme color.
- **Deep Teal** (teal-deep): the Contact field and the colophon strip. It is the darkest field, so the page settles there at the bottom.

### Secondary
- **Line Teal** (teal-light): appears only as the diagonal edge line, its echo in the light 300-weight "/" separators of the Expertise core stack, and the brightest tones of the duotone photos. It is never a fill, a word of text or a button color.

### Neutral
- **White** (white): the page ground, the top bar and the Over section. Also the text and outline-button color on teal fields.
- **Ink** (ink): body text on white. A green-tinted near-black, and also the darkest stop of the contact duotone.
- **Mint** (mint): secondary text on teal fields (the role line under the hero, the Expertise intro paragraphs and index labels, the Contact lead and company address, the mail hover).
- **Soft Mint** (mint-soft): the most muted text on teal. Used for the legacy "Ook" index row, the index's middle-dot separators, and the colophon text and links.

### Duotone ramps (baked into rasters)
- **Hero crop** (`img/hero-face.webp`): #0a2c26 > #0c5e50 > #0e715f > #17ba9d at stops 0 / .30 / .62 / 1. This is the darker ramp, chosen because white type sits on it.
- **Contact crop** (`img/contact-face.webp`, 900 × 1374, the left half of the face as seen, source x0-1310 y1000-3000): #14211e > #0e715f > #17ba9d > #dff7f1, the full brand ramp, ink to mint.
- Both crops are made from `img/profile.JPG` with a levels stretch from the 1st to the 99th percentile, saved as WebP q0.8. Each recipe is kept in the image's `.json` sidecar.

### Named Rules
**The Line-Only Rule.** Light teal (#17ba9d) is used only for the diagonal line, the "/" separators that echo it in the core stack, and the photo highlights. Once it fills a surface or colors words, the line stops being special.

**The Baked Duotone Rule.** The duotone lives in the raster and is never produced with CSS `filter`, `mix-blend-mode` or overlay tints. A new photo gets a new crop baked from the source portrait with one of the two ramps, and its recipe goes in a `.json` sidecar.

**The Two Fields Rule.** Every surface is white, teal or deep teal, with no grays and no tinted panels. Ink is a text color only.

## Typography

**Display Font:** Lato 900 (with Segoe UI, system-ui, sans-serif)
**Body Font:** Lato 400 (same stack)
**Label Font:** Lato 700, uppercase and tracked

**Character:** A single humanist sans used at its extremes. The heavy 900 caps shout the greeting and the section names, and the 300 tracked caps under them read almost like engraved lettering. Self-hosted latin subsets in four weights (300, 400, 700, 900) with `font-display: swap`. The 900 and 400 files are preloaded.

### Hierarchy
- **Display** (900, clamp(4.5rem, 11.5vw, 10.25rem), 0.95, -0.01em, uppercase): only "HALLO," in the hero, centered.
- **Headline** (900, clamp(2.25rem, 4.6vw, 4.0625rem), 1, 0.02em, uppercase): the section names OVER, EXPERTISE and CONTACT. Teal on white, white on teal.
- **Subline** (300, clamp(1.25rem, 2.4vw, 2.0625rem), 1.3, 0.2em, tightening to 0.12em at 640px and below, uppercase, balanced wrap): the hero question under HALLO.
- **Mail** (900, clamp(1.5rem, 3vw, 2.25rem)): the email address in Contact, white with a 2px underline.
- **Core** (900, clamp(1.75rem, 4.2vw, 3.5rem), 1.08, 0.01em, uppercase): the core stack under the EXPERTISE heading (.NET / AZURE / REACT / AI), left-aligned, white, separated by light-teal "/" in weight 300.
- **Body** (400, 1.0625rem, 1.7; 1rem at 640px and below): prose in columns of 560 to 640px. Bold 700 marks key phrases only.
- **Label** (700, 0.9375rem for buttons, 0.875rem for the nav and index labels, 1rem for the hero role line, 0.1em, uppercase): buttons, nav, index labels and the hero role line.
- **Small** (400, 0.8125rem): the colophon.

### Named Rules
**The Original Voice Rule.** Each weight has one job: 900 for shouted caps, 300 for tracked sublines, 700 for tracked labels, 400 for reading. Uppercase belongs to display, headlines, the core stack, sublines and labels, and never to body prose.

## Layout

The container is `wrap`: max 1200px, centered, with gutter padding (clamp(16px, 5vw, 64px)). Prose columns are deliberately offset instead of centered. They share one left reading edge, inset from the left by max(gutter, 18vw), with the gutter on the right. Over is max 640px wide. The Expertise intro is also max 640px and holds the heading, the core stack and Sean's four intro paragraphs in mint, in that order, all left-aligned. The Contact body is max 560px. The 2015 layout alternated text left and right; that alternation is retired, and the diagonal cuts carry the movement instead.

**The Expertise index** sits below the intro, clamp(56px, 7vw, 96px) down, with inline margins of max(gutter, 18vw) so it aligns with the text columns. It is a ruled list with one row per area: Languages, Frameworks, Azure, AI, Practices and Tools, then "Ook" for legacy items. Each row is a two-column grid, a 13rem label column and the items, with a 32px column gap and 20px vertical padding.

**Separators never start or end a line.** Both the core stack's "/" and the index's middle dot follow this. Both hang on their item's leading side, in a fixed slot (0.9em for the slash, 1.3em for the dot). The separator before a line's first item is clipped: the containing box clips its overflow (the intro for the stack, the items box for the index), and the list is pulled one slot past the box's left edge (-0.9em and -1.3em). This holds at every width.

**The cut system.** The cut height (cut, clamp(56px, 10vw, 180px)) sets the depth of every diagonal and drives the section padding and overlaps.
- **Hero to Over:** the bottom edge falls from left to right, `polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - cut))`. Over pulls up by 0.35 × cut into the white wedge.
- **Over to Expertise and Expertise to Contact:** the top edge rises to the right, `polygon(0 cut, 100% 0, 100% 100%, 0 100%)`. Contact pulls up by a full cut, so its diagonal lands on the Expertise band's extended bottom padding.
- **The line:** a `preserveAspectRatio="none"` SVG one cut tall, spanning the full width, drawing a single line from corner to corner (inset 3% at each end). It sits 16px below the hero cut, in the white wedge, and 16px above each rising cut.

The hero is clamp(520px, 50vw, 760px) tall and centers its type stack. The top bar is 84px tall (68px at 640px and below), with the monogram on the left and the nav on the right.

**Breakpoints:**
- **760px:** the contact photo leaves its right half, stacks below the text at 320px tall, and its mask fade turns vertical.
- **640px:** body drops to 1rem, the bar to 68px and the monogram to 32px. The nav shrinks to 0.8125rem with 0.06em tracking, the hero subline to 0.12em, and Over's overlap to 8px. Every text column (Over, the Expertise intro and index, Contact and the colophon) moves to the same gutter on both sides, so the page keeps one left edge on phones too, and each index row stacks its label above its items.
- **Print:** the bar, skip link, chevron, edge lines and buttons are hidden. Clip-paths are removed, rise and reveal targets are forced visible, and colors print exactly.

### Named Rules
**The Parallel Line Rule.** Every diagonal cut gets exactly one light-teal line parallel to it, 3px wide with `vector-effect: non-scaling-stroke`, 16px off the cut. A cut without its line, or a line without a cut, is off-system.

**The Straight Cut Rule.** Section boundaries are straight diagonals drawn with `clip-path` and sized by the cut token. No curves, no waves, and no baked shape images.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth comes from three sources: sections overlapping across their diagonals, the duotone photographs, and one scrim. The hero scrim is a radial gradient confined to the type block (`radial-gradient(ellipse 46% 52% at 50% 36%, rgba(8,40,34,.62) 0%, rgba(8,40,34,.38) 55%, transparent 100%)`). It deepens the photo only behind the type, so the highlights stay bright everywhere else. The contact half-face sits at the image's right edge, cut off by the page's right edge, and its background and cheek side dissolve into the deep teal field (#0a5a4b) through a short horizontal mask (`linear-gradient(to right, transparent 0%, #000 18%)`), which becomes vertical (`to bottom, transparent 0%, #000 35%`) at 760px and below.

### Named Rules
**The Flat Field Rule.** Fields never cast shadows. If something needs separation, use a cut, a color change or a 1px mint hairline (the index rules, the colophon rule). A scrim is allowed only where type sits on a photo, and only as large as the type block.

## Shapes

Every corner is square (0px): buttons, fields, photos and the skip link. The recurring silhouette is the trapezoid made by a diagonal cut. The only other strokes are the 2px outline on buttons, the 1px mint rules of the Expertise index (rgba(223,247,241,0.28) on top of each row, plus the bottom of the last), the 1px mint rule at 35% opacity above the colophon, and the hero chevron, a wide open V drawn with a 1.5 stroke (64 × 32px).

**The area glyphs** are the six original icons, redrawn as inline SVG on a 512 grid. They now appear at 28px in white as row markers in the Expertise index: speech bubble for Languages, framed picture for Frameworks, cloud for Azure, chip for AI, star badge for Practices, and tools for Tools. The "Ook" row uses a history mark (a clock with a counter-clockwise arrow, for earlier experience), drawn as a 34-unit round-capped stroke and tinted soft mint like the rest of that row. Five are filled shapes with evenodd holes that read as outlines. The Azure cloud is a 46-unit stroke scaled to match their weight. Together they form one outline-weight family. A new icon must match this weight, not come from a generic icon set.

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
- **Links:** OVER / EXPERTISE / CONTACT in 700 tracked teal caps at 0.875rem, gap clamp(20px, 5vw, 72px). Hover adds a 2px underline offset 0.4em. The nav stays visible at every width, with no hamburger menu.
- **Skip link:** a teal block with white text, hidden above the viewport until focused.

### Inline links
Teal with a 1px underline offset 0.2em, thickening to 2px on hover. On teal fields, the mail link is white with a 2px underline and turns mint on hover.

### Hero
Teal field behind a full-bleed duotone crop (object-position 50% 30%) with the scrim behind the type. Top to bottom: HALLO (display), the subline question, the role line (label, mint), the white outline button, then the chevron.

### Expertise index
A ruled list, not cards or columns. Each row has 1px hairlines in rgba(223,247,241,0.28): one on top of every row and one under the last. The label cell holds the 28px white glyph and the area name in 700 tracked mint caps at 0.875rem, 14px apart. The items run inline in white at body size (line-height 1.7), separated by soft-mint middle dots, and wrap freely. The last row, "Ook" (WCF, ADO.NET, jQuery, XML / XSLT), sets its glyph, label and items in soft mint. At 640px and below, the label sits above the items.

### Core stack
The headline list under EXPERTISE, at the core size in white, left-aligned and wrapping, with light-teal 300-weight "/" separators that echo the diagonal. Each slash sits on its item's leading side, and the slash before a line's first item is clipped, as described under Layout.

### Contact
Deep teal field with the half-face crop filling its right half (object-position 100% 30%). The face is anchored to the image's right edge and cut off by the page edge, like the 2015 original. The 18% left mask fade dissolves the background and cheek side into deep teal toward the text, so the face reads as emerging from the field rather than as a framed photo. Then come the lead in mint, the email address at mail scale, the company address in mint, and the white outline button.

### Colophon strip
Deep teal, with a 1px rule of mint at 35% opacity on top, 20px vertical padding and small text in soft mint. Company and VAT on the left, "Naar boven" on the right, wrapping on narrow screens. Links turn white on hover.

### Motion (signature)
The ease for everything is [0.16, 1, 0.3, 1], also used as the CSS transition curve. The library is motion.dev's mini `animate` build (v14.6.0).
- **Hero sweep:** the clip-path animates from flat to the diagonal over 1.2s, delay 0.15s.
- **Edge lines:** each line unclips from left to right (`inset(0 100% 0 0)` to `inset(0 0% 0 0)`) over 1.1s. The hero line starts at 0.35s. The other lines draw once, when they enter the viewport (rootMargin -15% at the bottom).
- **Hero type:** rises 14px and fades in over 0.8s, staggered 0.08s from a 0.1s start.
- **Reveal groups:** the core stack items and the index rows rise 10px and fade in once, when their group scrolls into view, over 0.6s, staggered 0.06s.
- **Fallback:** without JavaScript, or with reduced motion, everything shows its final state. A head script sets `.motion` only when motion is allowed and clears it after 2.5s as a failsafe. Smooth scrolling also respects reduced motion.

## Do's and Don'ts

### Do:
- **Do** separate sections with straight diagonal cuts sized by the cut token, and give every cut its parallel light-teal line 16px off.
- **Do** make the hero fall from left to right, and make the following cuts rise to the right.
- **Do** bake any new portrait crop from `img/profile.JPG` with one of the two duotone ramps (the darker hero ramp wherever white type sits on it), and record its recipe in a `.json` sidecar.
- **Do** keep Lato to its four roles: 900 uppercase display and headlines, 300 tracked uppercase subline, 700 tracked caps labels, 400 body.
- **Do** use square outline buttons: white on teal, teal on white, filling on hover.
- **Do** keep text columns narrow (560 to 640px) on the single left reading edge (max(gutter, 18vw)), and let the diagonals carry the movement.
- **Do** keep a teal field's secondary text in mint and its most muted text in soft mint.
- **Do** let separators (the core stack's slash, the index's middle dot) hang on one side of their item and clip at line edges, so no line starts or ends on one.
- **Do** make every animation end in a final state that is already correct without JavaScript, with the [0.16, 1, 0.3, 1] ease and no repeat.

### Don't:
- **Don't** use light teal (#17ba9d) as a fill, for words of text or as a button color. It is the line, the core stack's slash separators and the photo highlights only.
- **Don't** tint photos with CSS filters, blend modes or color overlays. Only the radial type scrim may darken a photo.
- **Don't** add shadows, rounded corners or cards.
- **Don't** draw curved or wavy section edges, or bake cut shapes into images.
- **Don't** introduce grays or a second hue. Surfaces are white, teal or deep teal.
- **Don't** replace the six original area glyphs with a stock icon set, or mix in icons of a different weight.
- **Don't** loop or re-trigger the line draws. Each line draws once.
