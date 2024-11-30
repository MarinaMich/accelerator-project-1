import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

const slides = new Swiper('.slides__container', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },

  navigation: {
    nextEl: '.slides__button-next',
    prevEl: '.slides__button-prev',
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 'auto',
      spaceBetween: 40,
    },
    // when window width is >= 1366px
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const slidesRev = new Swiper('.slides-rev__container', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.slides-rev__button-next',
    prevEl: '.slides-rev__button-prev',
  },
});

slides.slideNext();
slidesRev.init();
