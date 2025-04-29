import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const form = document.querySelector('.contacts-form');
const email = form.elements.email;
const message = form.elements.message;
const modal = document.querySelector('.contacts-backdrop');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.contacts-modal-btn');
const input = document.querySelector('.form-input');
const correctEmailSvg = document.querySelector('.success-filled');
const errorMessage = document.querySelector('.error-message');
const EMAIL_PATTERN = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener('submit', submitForm);
modal.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);
input.addEventListener('input', checkValidEmail);

async function submitForm(event) {
  event.preventDefault();
  correctEmailSvg.classList.add('visually-hidden');
  if (!isEmailValid(input.value.trim())) {
    errorMessage.classList.remove('visually-hidden');
    input.classList.add('error');
    return;
  }
  try {
    const url = 'https://portfolio-js.b.goit.study/api/requests';
    const data = {
      email: input.value.trim(),
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

function isEmailValid(email) {
  return EMAIL_PATTERN.test(email);
}

function checkValidEmail() {
  errorMessage.classList.add('visually-hidden');
  input.classList.remove('error');
  correctEmailSvg.classList.add('visually-hidden');

  if (isEmailValid(input.value)) {
    correctEmailSvg.classList.remove('visually-hidden');
  }
}
