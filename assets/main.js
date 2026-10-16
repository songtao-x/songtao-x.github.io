(() => {
  'use strict';
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  // Preserve links to the former all-publications view.
  const restorePublicationLink = () => {
    if (location.hash === '#publications-all') {
      history.replaceState(null, '', '#publications');
      requestAnimationFrame(() => document.getElementById('publications').scrollIntoView({ behavior: 'instant' }));
    }
  };
  restorePublicationLink();
  window.addEventListener('hashchange', restorePublicationLink);

  // Follow the section crossing the navigation, including when scrolling upward.
  const nav = document.querySelector('.site-nav');
  const links = [...document.querySelectorAll('.nav-links a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let scheduled = false;
  const updateActiveLink = () => {
    const threshold = nav.getBoundingClientRect().bottom + 110;
    let active = 0;
    sections.forEach((section, index) => { if (section && section.getBoundingClientRect().top <= threshold) active = index; });
    if (scrollY > 0 && document.documentElement.scrollHeight - scrollY - innerHeight < 8) active = links.length - 1;
    links.forEach((link, index) => {
      link.classList.toggle('active', index === active);
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  const scheduleNav = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateActiveLink); } };
  window.addEventListener('scroll', scheduleNav, { passive: true });
  window.addEventListener('resize', scheduleNav);
  updateActiveLink();
})();
