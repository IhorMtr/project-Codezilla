document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('.nav-item-link');
  
    function openModal() {
      modal.classList.add('active');
      document.body.classList.add('no-scroll');
  
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = scrollbarWidth + 'px';
      }
    }
  
    function closeModal() {
      modal.classList.remove('active');
      document.body.classList.remove('no-scroll');
      document.body.style.paddingRight = '';
    }
  
    function handleNavLinkClick(event) {
      if (window.innerWidth < 768) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          closeModal();
          history.pushState(null, null, targetId);
        }
      }
    }
  
    function handleWindowResize() {
      if (window.innerWidth >= 768) {
        closeModal();
      }
    }
  
    burgerBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', handleNavLinkClick);
    });
  
    window.addEventListener('resize', handleWindowResize);
  });