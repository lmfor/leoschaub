// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Typewriter effect on the intro role line — runs once on load
const TYPEWRITER_TEXT = 'CS student — ML systems & agent infrastructure';
const typeEl = document.getElementById('typewriter');

if (typeEl) {
  if (prefersReducedMotion) {
    typeEl.textContent = TYPEWRITER_TEXT;
  } else {
    let i = 0;
    const type = () => {
      if (i <= TYPEWRITER_TEXT.length) {
        typeEl.textContent = TYPEWRITER_TEXT.slice(0, i);
        i++;
        setTimeout(type, 26);
      }
    };
    type();
  }
}

// Scroll reveal for ledger rows, project entries, skill groups
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length) {
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));

    // Safety net: if the observer never fires for some reason, don't leave
    // content permanently invisible.
    setTimeout(() => {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }, 4000);
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
}