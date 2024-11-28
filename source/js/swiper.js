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
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

const slidesRev = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

slides.slideNext();
const swiper = document.querySelector('.slides-rev__containers').slidesRev;
