---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# seanstove.be home (index.html)

Scope: the single public page of seanstove.be. Visitor mode: **Persuade**.
Audience: agency recruiters and clients checking a .NET freelancer. Action: download the CV or send an email. Constraints: Dutch only, static GitHub Pages, fast, teal + folded S binding, Sean's portrait, light motion via motion.dev, no "AI look".

History: Profielfiche (profile sheet) was built and rejected by Sean; two re-rolls declined. Sean then pinned the direction in words: "keep it closer to the original, with the header which is a part of my head, the diagonal line (maybe animate this)". The pin beats the roll.

## Direction contract

THESIS: The original seanstove.be, rebuilt properly: teal duotone face crops cut by diagonals, now drawn in code instead of baked into JPGs. It refuses both the 2015 implementation (baked shapes, fixed pixels, jQuery) and a generic modern template that would lose the face-and-diagonal identity.

OWN-WORLD: Teal fields (#0e715f, deep #0a5a4b) and white; light teal #17ba9d only as the thin diagonal line and in photo highlights. Sean's portrait as teal duotone crops, a darker ramp where white type sits on it. Every section boundary is a straight diagonal cut with a parallel light-teal line 16px off it. Lato in the original's voice: 900 uppercase display, 300 tracked uppercase sublines, uppercase tracked labels and outline buttons. Square corners, no shadows, no cards.

STORY: Hallo, applicatie of site nodig? Then who (Sean Stove, freelance .NET developer), Download CV. Over on white, Skills on a teal band with the six icon columns (legacy items muted, at the bottom), Contact on deep teal beside the eyes crop, company details, CV again.

FIRST VIEWPORT: White top bar (S monogram left, OVER / SKILLS / CONTACT right in teal caps). Full-width hero: lower face crop, "HALLO," at display scale centered, "APPLICATIE OF SITE NODIG?" tracked under it, the name/role line, a white outline Download CV button and the original chevron. Bottom edge cut on a diagonal falling left to right, light-teal line along it; OVER starts in the white wedge.

FORM: pinned by Sean ("Origineel, vernieuwd"), position: user pin, beats the roll. seed:e641aa634cf274b6. Signature interaction: on load the hero's bottom edge sweeps from flat into its diagonal (clip-path) and the line draws along it; each further diagonal line draws once as it scrolls into view; hero type rises in sequence. Motion grammar: exponential ease-out [0.16,1,0.3,1], content visible without JS, reduced motion shows the final state.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
