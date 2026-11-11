import { animate } from "./motion-mini.js";

const root = document.documentElement;
const ease = [0.16, 1, 0.3, 1];

// The cut height mirrors --cut: clamp(56px, 10vw, 180px).
const cutPx = () => Math.min(180, Math.max(56, window.innerWidth * 0.1));

// A diagonal line "draws" by unclipping its svg from left to right.
function drawEdge(svg, delay = 0) {
  animate(svg, { clipPath: ["inset(0px 100% 0px 0px)", "inset(0px 0% 0px 0px)"] }, { duration: 1.1, delay, ease }).then(
    () => (svg.style.clipPath = "")
  );
}

if (root.classList.contains("motion")) {
  const hero = document.querySelector(".hero");
  const heroLine = document.querySelector(".hero-wrap .edge");
  const rise = document.querySelectorAll("[data-rise]");
  const edges = document.querySelectorAll(".skills-wrap .edge, .contact-wrap .edge");

  // Pin the start state inline, then hand control to motion.
  hero.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
  rise.forEach((el) => (el.style.opacity = "0"));
  [heroLine, ...edges].forEach((svg) => (svg.style.clipPath = "inset(0px 100% 0px 0px)"));
  root.classList.remove("motion");

  // The signature moment: the header's bottom edge sweeps into its diagonal and the line draws along it.
  const sweep = animate(
    hero,
    {
      clipPath: [
        "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
        `polygon(0px 0px, 100% 0px, 100% 100%, 0px calc(100% - ${cutPx()}px))`,
      ],
    },
    { duration: 1.2, delay: 0.15, ease }
  );
  sweep.then(() => (hero.style.clipPath = ""));
  drawEdge(heroLine, 0.35);

  rise.forEach((el, i) => {
    animate(
      el,
      { opacity: [0, 1], transform: ["translateY(14px)", "translateY(0)"] },
      { duration: 0.8, delay: 0.1 + i * 0.08, ease }
    ).then(() => (el.style.transform = ""));
  });

  // The other diagonals draw their line once, when they scroll into view.
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        drawEdge(entry.target);
      });
    },
    { rootMargin: "0px 0px -15% 0px" }
  );
  edges.forEach((svg) => io.observe(svg));
}
