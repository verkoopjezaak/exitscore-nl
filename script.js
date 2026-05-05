/* Exit Score landing, minimal JS */
(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');

  // Sticky header shadow on scroll
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 8) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const open = header.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });

    // Close mobile menu when a nav link is clicked
    header.querySelectorAll('.primary-nav a, .header-cta').forEach((a) => {
      a.addEventListener('click', () => {
        header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Play-button placeholder hint (until video is provided)
  const playBtn = document.querySelector('.play-button');
  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      playBtn.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(0.92)' }, { transform: 'scale(1)' }],
        { duration: 220, easing: 'ease-out' }
      );
    });
  }
})();
