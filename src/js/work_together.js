import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const form = document.querySelector('.contacts-form');
const email = form.elements.email;
const message = form.elements.message;
const modal = document.querySelector('.contacts-backdrop');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.contacts-modal-btn');

form.addEventListener('submit', submitForm);
modal.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

async function submitForm(event) {
  event.preventDefault();
  try {
    const url = 'https://portfolio-js.b.goit.study/api/requests';
    const data = {
      email: email.value.trim(),
      comment: message.value.trim(),
    };
    await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    body.classList.add('contacts-no-scroll');
    modal.classList.remove('contacts-is-hidden');
    form.reset();
  } catch (error) {
    if (error.status === 400) {
      return iziToast.info({
        title: 'Please',
        message: 'leave a few words about your project.',
        position: 'topRight',
      });
    } else if (error.status === 404) {
      return iziToast.error({
        title: 'Error',
        message: 'Sorry, server is not found',
        position: 'topRight',
      });
    } else if (error.status === 500) {
      return iziToast.error({
        title: 'Error,',
        message: 'Sorry,there was a server failure.',
        position: 'topRight',
      });
    }
    console.log(error);
  }
}

function closeModal(event) {
  if (modal.classList.contains('contacts-is-hidden')) {
    return;
  }
  if (
    event.target === modal ||
    event.currentTarget.nodeName === 'BUTTON' ||
    event.key === 'Escape'
  ) {
    body.classList.remove('contacts-no-scroll');
    modal.classList.add('contacts-is-hidden');
  }
}
