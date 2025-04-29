import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {
  openOnInit: [0],
});

document.querySelectorAll('.ac-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    setTimeout(() => {
      if (window.applyCurrentTheme) {
        window.applyCurrentTheme();
      }
    }, 10);
  });
});
