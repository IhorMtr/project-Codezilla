document.addEventListener('DOMContentLoaded', function() {
    const switchButtons = document.querySelectorAll('.switch-btn');
    const bodyElement = document.body;
    const modalElement = document.querySelector('.modal');

    function toggleTextColor() {
      const elements = document.querySelectorAll('body, body *:not(script):not(.span-last-name)');
      elements.forEach(function(element) {
        const computedColor = getComputedStyle(element).color;
        if (computedColor === 'rgb(240, 240, 240)' || element.style.color === 'rgb(240, 240, 240)') {
          element.style.color = '#292929';
        } else if (computedColor === 'rgb(41, 41, 41)' || element.style.color === '') {
          element.style.color = '#f0f0f0';
        }
      });
    }
  
    function toggleTheme() {
      const isDark = bodyElement.style.backgroundColor === 'rgb(30, 32, 35)';
      
      const newBgColor = isDark ? '#f0f0f0' : '#1e2023';
      bodyElement.style.backgroundColor = newBgColor;
      modalElement.style.backgroundColor = newBgColor;
      toggleTextColor();
      
      document.querySelectorAll('.switch-light-svg').forEach(function(el) {
        el.style.display = isDark ? 'block' : 'none';
      });
      
      document.querySelectorAll('.switch-dark-svg').forEach(function(el) {
        el.style.display = isDark ? 'none' : 'block';
      });
    }
  
    function initTheme() {
      const initialBgColor = '#f0f0f0';
      bodyElement.style.backgroundColor = initialBgColor;
      modalElement.style.backgroundColor = initialBgColor;
    }
    initTheme();
  
    switchButtons.forEach(function(button) {
      button.addEventListener('click', toggleTheme);
    });
  });