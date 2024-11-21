import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

new Swiper('.swiper', {
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
