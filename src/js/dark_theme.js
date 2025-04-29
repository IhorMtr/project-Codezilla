document.addEventListener('DOMContentLoaded', function () {
    const THEME_KEY = 'darkTheme';
    const themeSwitches = document.querySelectorAll(
      '.switch-header input[type="checkbox"]'
    );
    const darkThemeElements = document.querySelectorAll('[data-dark-class]');
  
    function toggleDarkTheme(enable) {
      darkThemeElements.forEach(el => {
        const className = el.dataset.darkClass;
        if (className) {
          el.classList.toggle(className, enable);
        }
      });
    }
  
    const isDarkSaved = localStorage.getItem(THEME_KEY) === 'true';
  
    if (isDarkSaved) {
      toggleDarkTheme(true);
      themeSwitches.forEach(sw => (sw.checked = true));
    }
  
    themeSwitches.forEach(switchInput => {
      switchInput.addEventListener('change', function () {
        const isChecked = this.checked;
  
        toggleDarkTheme(isChecked);
  
        if (isChecked) {
          localStorage.setItem(THEME_KEY, 'true');
        } else {
          localStorage.removeItem(THEME_KEY);
        }
  
        themeSwitches.forEach(sw => {
          if (sw !== this) sw.checked = isChecked;
        });
      });
    });
  });