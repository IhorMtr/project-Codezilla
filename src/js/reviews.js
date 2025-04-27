import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'izitoast/dist/css/iziToast.min.css';

const swiperWrapper = document.querySelector('.swiper-wrapper');
const reviewsSection = document.querySelector('.reviews-section');

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  keyboard: {
    enabled: true,
  },
});

const reviewsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        createReviewsMarkup();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

async function getReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    iziToast.show({
      title: 'Error',
      message: 'Something went wrong',
      backgroundColor: 'red',
      titleColor: '#fff',
      messageColor: '#fff',
      position: 'topRight',
    });
    const markup = createReviewsErrorMarkup();
    swiperWrapper.innerHTML = markup;
  }
}

async function createReviewsMarkup() {
  const reviewsData = await getReviews();
  const createdMarkup = reviewsData.map(element => {
    return `<div class="swiper-slide">
          <blockquote class="swiper-slide-text">${element.review}</blockquote>
          <div class="swiper-slide-content-wrapper">
            <img src="${element.avatar_url}" alt="Blockquote author" class="swiper-slide-image" />
            <h3 class="swiper-slide-title">${element.author}</h3>
          </div>
        </div>`;
  });
  swiperWrapper.innerHTML = createdMarkup.join('');
}

function createReviewsErrorMarkup() {
  return `<div class="swiper-slide">
          <p>Not found</p>
        </div>`;
}

reviewsObserver.observe(reviewsSection);
