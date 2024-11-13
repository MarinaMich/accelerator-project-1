// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

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
