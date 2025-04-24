# Коротка інформація до проєкту

### ⚠️ УВАГА!

**FILL ТА STROKE ПО ДЕФОЛТУ ОБНУЛЕНІ!**

## Список іконок:

| Icon Name                    | Preview                                                       |
| ---------------------------- | ------------------------------------------------------------- |
| **icon-arrow-narrow-right**  | ![icon-arrow-narrow-right](./assets/arrow-narrow-right.svg)   |
| **icon-arrow-right**         | ![icon-arrow-right](./assets/arrow-right.svg)                 |
| **icon-brush**               | ![icon-brush](./assets/brush.svg)                             |
| **icon-chevron-down**        | ![icon-chevron-down](./assets/chevron-down.svg)               |
| **icon-chevron-up**          | ![icon-chevron-up](./assets/chevron-up.svg)                   |
| **icon-diagonal-arrow**      | ![icon-diagonal-arrow](./assets/diagonal-arrow.svg)           |
| **icon-hourglass**           | ![icon-hourglass](./assets/hourglass.svg)                     |
| **icon-location**            | ![icon-location](./assets/location.svg)                       |
| **icon-mail**                | ![icon-mail](./assets/mail.svg)                               |
| **icon-message-chat-circle** | ![icon-message-chat-circle](./assets/message-chat-circle.svg) |
| **icon-phone**               | ![icon-phone](./assets/phone.svg)                             |
| **icon-success-filled**      | ![icon-success-filled](./assets/success-filled.svg)           |
| **icon-user**                | ![icon-user](./assets/user.svg)                               |

---

## Корисні класи

- **.visually-hidden** — приховує елемент візуально, але залишає його доступним
  для скрінрідерів.
- **.caption** — стилі для де-яких заголовків(див. по макету).
- **.black-theme-text** — білий колір тексту для чорної теми.
- **.black-theme-background** - колір фону для чорної теми.

---

# Вимоги до коду

## 1. Оптимізація зображень

- **Перетворення JPEG → WebP**  
  Усі файли `.jpg` / `.jpeg` потрібно конвертувати у формат `.webp`
- **Підтримка Retina-екранів через `<picture>`**  
   Використовуйте тег `<picture>` із джерелами для 1× та 2× щільності:

  ```html
  <picture>
    <source
      srcset="path/to/image-mobile-1x.jpg 1x, path/to/image-mobile-2x.jpg 2x"
      media="(max-width: 767px)"
    />

    <source
      srcset="path/to/image-tablet-1x.jpg 1x, path/to/image-tablet-2x.jpg 2x"
      media="(min-width: 768px) and (max-width: 1279px)"
    />

    <source
      srcset="path/to/image-desktop-1x.jpg 1x, path/to/image-desktop-2x.jpg 2x"
      media="(min-width: 1280px)"
    />

    <img
      class="example-class"
      src="path/to/image-mobile-1x.jpg"
      alt="example image"
      width="example-width"
      height="example-height"
      loading="lazy"
    />
  </picture>
  ```

  loading="lazy" варто додавати до усіх зображень.

  **!! Але не до зображень у секції hero !!**

## 2. Структура та стиль коду

Використовуйте function declarations як стандарт:

function fetchData() { /_ ... _/ }

Стрілкові функції => застосовуйте лише там, де це справді зручно й доцільно:
колбеки масивів (forEach, map, тощо), обробка промісів, тощо.

camelCase для всіх ідентифікаторів: let userProfile, function getUserData(),
const postListElement.

## 3. Робота з API

Використовуйте Axios для всіх HTTP-запитів. Використовуйте синтаксис async/await
для всіх запитів.

import axios from 'axios';

## 4. Сповіщення

Для відображення повідомлень підключена бібліотека iziToast.

import iziToast from 'izitoast';

## 5. Обробка подій

Слухачі подій додаємо іменованими функціями, щоб їх можна було зняти:

function handleClick(event) { /_ ... _/ }

button.addEventListener('click', handleClick); // За потреби:
button.removeEventListener('click', handleClick);
