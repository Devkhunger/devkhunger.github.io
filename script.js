/* ==========================================================
   ✏️  EDIT YOUR LINKS HERE. This is the only place you need to change them.
   ========================================================== */
const LINKS = {
  email:              "mailto:devkhunger987@gmail.com",
  linkedin:           "https://www.linkedin.com/in/devkhunger/",
  github:             "https://github.com/Devkhunger",
  codolio:            "https://codolio.com/profile/devkhunger",

  okcredit:           "https://okcredit.in/finternship",
  copilot_github:     "https://github.com/Devkhunger/seller-copilot",
  copilot_live:       "https://seller-copilot-4.onrender.com",
  mentora_github:     "https://github.com/sg-1-5/Mentora_AI",
  geodispatch_github: "https://github.com/Devkhunger/Dynamic-Kd--Trees",

  proof_lor:          "https://drive.google.com/file/d/1vYngB9_9ukA3MV-ZlD3j84YkyGlUBirK/view?usp=sharing",
  proof_sims:         "https://drive.google.com/file/d/1U2Tbnc0wj814tHSivVUCeFq48TzO0vF8/view?usp=drive_link",
  // This Drive folder is private (it asks visitors to sign in). Set sharing to "Anyone with the link",
  // then paste the URL here. While it's empty, the Proof link stays hidden.
  proof_ioqm:         "",
};

// Words that rotate in the hero headline
const ROLES = [
  "intelligent systems",
  "AI-powered products",
  "data pipelines",
  "full-stack web apps",
  "high-performance engines",
];

/* ========================================================== */

// Apply links
document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (url) el.href = url;
  else el.hidden = true; // hide links that don't have a URL yet
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Nav: background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
const setMenu = (open) => {
  toggle.classList.toggle("open", open);
  links.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
};
toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reveal-on-scroll
const revealObs = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); }
  }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

// Active nav link
const navAnchors = [...links.querySelectorAll('a[href^="#"]')];
const sectionObs = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    }
  }),
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => sectionObs.observe(s));

// Animated stat counters
const animateCount = (el) => {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const fmt = (v) => prefix + v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
  if (reduceMotion) { el.textContent = fmt(target); return; }
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(target * eased);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const countObs = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { animateCount(e.target); countObs.unobserve(e.target); }
  }),
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObs.observe(el));

// Typing effect in hero
const typed = document.getElementById("typed");
if (typed && !reduceMotion) {
  let roleIdx = 0, charIdx = ROLES[0].length, deleting = true;
  const tick = () => {
    const word = ROLES[roleIdx];
    charIdx += deleting ? -1 : 1;
    typed.textContent = word.slice(0, charIdx);
    let delay = deleting ? 40 : 75;
    if (!deleting && charIdx === word.length) { deleting = true; delay = 2000; }
    else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; delay = 300; }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
}
