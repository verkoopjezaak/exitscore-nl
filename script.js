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

  // Mobile menu drawer
  function closeMenu() {
    header.classList.remove('menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function openMenu() {
    header.classList.add('menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (header.classList.contains('menu-open')) closeMenu(); else openMenu();
    });

    // Close drawer when a link is tapped
    header.querySelectorAll('.primary-nav a, .header-cta').forEach((a) => {
      a.addEventListener('click', closeMenu);
    });

    // ESC closes drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('menu-open')) closeMenu();
    });

    // Close drawer if viewport is widened to desktop
    let mq = window.matchMedia('(min-width: 721px)');
    function onMq(e) { if (e.matches) closeMenu(); }
    if (mq.addEventListener) mq.addEventListener('change', onMq);
    else if (mq.addListener) mq.addListener(onMq);
  }

  // Play-button placeholder animation (until real video is provided)
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
