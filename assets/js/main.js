document.addEventListener('DOMContentLoaded', function () {
  initializeNavbar();
  initializeSlider();
});

function initializeNavbar() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const closeButton = document.querySelector('.navbar__mobile-close-btn');
  const navbarMenu = document.querySelector('.navbar__menu');

  // Toggle menu on hamburger click and update accessibility attribute
  hamburger.addEventListener('click', toggleMenu);

  // Close menu on close button click
  closeButton.addEventListener('click', closeMenu);

  // Close menu when clicking outside of it
  document.addEventListener('click', handleOutsideClick);

  function toggleMenu() {
    const isOpen = navbarMenu.classList.toggle('navbar__mobile-toggle-show');
    hamburger.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    navbarMenu.classList.remove('navbar__mobile-toggle-show');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function handleOutsideClick(event) {
    if (
      !navbarMenu.contains(event.target) &&
      !hamburger.contains(event.target) &&
      navbarMenu.classList.contains('navbar__mobile-toggle-show')
    ) {
      closeMenu();
    }
  }
}

function initializeSlider() {
  const carouselContainer = document.querySelector('.hero__carousel-container');
  const slides = document.querySelectorAll('.hero__carousel-slide');

  // Clone slides into the existing container
  slides.forEach((slide) => {
    carouselContainer.appendChild(slide.cloneNode(true));
  });

  let currentSlide = 0;

  function updateSlidePosition() {
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Move right or loop to start
    updateSlidePosition();
  }

  function moveToPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move left or loop to end
    updateSlidePosition();
  }

  document
    .querySelector('.hero__slide-right-button')
    .addEventListener('click', moveToNextSlide);

  document
    .querySelector('.hero__slide-left-button')
    .addEventListener('click', moveToPrevSlide);

  // Initialize first slide position
  updateSlidePosition();
}
