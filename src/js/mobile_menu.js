document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const menuLinks = document.querySelectorAll('.mobile-list-item-link');
  const body = document.body;

  burgerBtn.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
    body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    body.style.overflow = '';
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      body.style.overflow = '';
    });
  });
});