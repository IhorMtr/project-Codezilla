document.addEventListener('DOMContentLoaded', function () {
  const THEME_KEY = 'darkTheme';
  const themeSwitches = document.querySelectorAll(
    '.switch-header input[type="checkbox"]'
  );

  function toggleDarkTheme(enable) {
    const darkThemeElements = document.querySelectorAll('[data-dark-class]');
    darkThemeElements.forEach(el => {
      const baseClass = el.dataset.darkClass;
      const activeClass = el.dataset.darkClassActive;

      if (baseClass) {
        baseClass.split(' ').forEach(className => {
          if (className.trim()) {
            el.classList.toggle(className, enable);
          }
        });
      }

      if (activeClass) {
        const shouldApply = enable && el.classList.contains('is-active');
        activeClass.split(' ').forEach(className => {
          if (className.trim()) {
            el.classList.toggle(className, shouldApply);
          }
        });
      }
    });
  }

  window.applyCurrentTheme = function () {
    const isDarkSaved = localStorage.getItem(THEME_KEY) === 'true';
    toggleDarkTheme(isDarkSaved);
  };

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
