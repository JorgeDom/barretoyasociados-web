// Page motion: scroll reveals, sticky-nav state, active nav link, timeline progress,
// hero parallax and stat count-up. Everything degrades to a static page without JS
// or under prefers-reduced-motion.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* Reveal on enter ------------------------------------------------------ */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* Stat count-up -------------------------------------------------------- */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const runCount = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  if (reduceMotion.matches || !target) return;
  const from = Number(el.dataset.countFrom ?? 0);
  const duration = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(from + (target - from) * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const countIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        runCount(entry.target as HTMLElement);
        countIO.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => countIO.observe(el));
}

/* Active nav link ------------------------------------------------------ */
const navLinks = new Map<string, HTMLAnchorElement>();
document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((a) => {
  navLinks.set(a.hash.slice(1), a);
});
if (navLinks.size && 'IntersectionObserver' in window) {
  const sectionIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach((a) => a.removeAttribute('aria-current'));
        navLinks.get(entry.target.id)?.setAttribute('aria-current', 'true');
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  navLinks.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) sectionIO.observe(section);
  });
}

/* Scroll-linked effects (one rAF-throttled listener) ------------------- */
const header = document.querySelector<HTMLElement>('[data-site-header]');
const hero = document.querySelector<HTMLElement>('.hero');
const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');
// Section-relative parallax: moves with the element's position in the viewport (photo bands).
const localParallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax-local]');
const timeline = document.querySelector<HTMLElement>('[data-timeline]');

let ticking = false;
const onScroll = () => {
  const y = window.scrollY;
  // Navbar stays transparent while it is over the hero photo, solid after it.
  const heroEnd = hero ? hero.offsetHeight - (header?.offsetHeight ?? 72) * 1.5 : 8;
  header?.classList.toggle('is-scrolled', y > Math.max(8, heroEnd));

  if (!reduceMotion.matches) {
    parallaxEls.forEach((el) => {
      const speed = Number(el.dataset.parallax) || 0.1;
      el.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;
    });
    const vh = window.innerHeight;
    localParallaxEls.forEach((el) => {
      const box = el.parentElement!.getBoundingClientRect();
      if (box.bottom < -200 || box.top > vh + 200) return;
      const speed = Number(el.dataset.parallaxLocal) || 0.15;
      const offset = (box.top + box.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
  }

  if (timeline) {
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(1, Math.max(0, (vh * 0.6 - rect.top) / rect.height));
    timeline.style.setProperty('--progress', progress.toFixed(3));
  }
  ticking = false;
};
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
onScroll();
