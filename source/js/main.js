// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

// Включение видеоролика

const cover = document.querySelector('.visuals__cover');
const video = document.querySelector('.visuals__iframe');
const button = document.querySelector('.visuals__button');

button.addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/watch?v=9TZXsZItgdw');
  iframe.setAttribute('width', '320');
  iframe.setAttribute('height', '170');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');
  video.appendChild(iframe);
  cover.classList.add('visuals__cover--none');
  document.getElementById('play').style.display = 'none';
});

// Табы в выборе абонимента

const seasonTicketsTabs = document.querySelectorAll('.tabs__button');
const seasonTicketsLists = document.querySelectorAll('.season-tickets__list');
let currentTab;

const thisTab = (index) => {
  seasonTicketsTabs.forEach((tab) => tab.classList.remove('tabs__button--current'));
  seasonTicketsLists.forEach((list) => list.classList.remove('season-tickets__list--current'));
  seasonTicketsTabs[index].classList.add('tabs__button--current');
  seasonTicketsLists[index].classList.add('season-tickets__list--current');
};

seasonTicketsTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    currentTab = index;
    thisTab(currentTab);
  });
});
