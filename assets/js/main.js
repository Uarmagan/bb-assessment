document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.navbar__hamburger');
  const closeButton = document.querySelector('.navbar__mobile-close-btn');
  const navbarMenu = document.querySelector('.navbar__menu');

  // Toggle menu on hamburger click and update accessibility attribute.
  hamburger.addEventListener('click', () => {
    const isOpen = navbarMenu.classList.toggle('navbar__mobile-toggle-show');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on close button click.
  closeButton.addEventListener('click', () => {
    navbarMenu.classList.remove('navbar__mobile-toggle-show');
    hamburger.setAttribute('aria-expanded', 'false');
  });

  // Close menu when clicking outside of it.
  document.addEventListener('click', (event) => {
    if (
      !navbarMenu.contains(event.target) &&
      !hamburger.contains(event.target) &&
      navbarMenu.classList.contains('navbar__mobile-toggle-show')
    ) {
      navbarMenu.classList.remove('navbar__mobile-toggle-show');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
