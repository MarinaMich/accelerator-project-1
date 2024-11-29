// слайдер жюри
import './swiper.js';
import './accordion.js';

// слайдер отзывов, блокировка левой кнопки при загрузке страницы

window.addEventListener('load', () => {
  const listSlide = document.querySelectorAll('.slides-rev__item');
  const buttonPrev = document.querySelector('.slides-rev__button-prev');
  if (listSlide[0].classList.contains('swiper-slide-active')) {
    buttonPrev.classList.add('swiper-button-disabled');
    buttonPrev.setAttribute('disabled', '');
  }
});

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

// disabled для ссылок

const links = document.querySelectorAll('.link');

const disabledLink = () => {
  links.forEach((link) => {
    if (link.classList.contains('link--disabled')) {
      link.setAttribute('tabindex', '-1');
    }
  });
};
disabledLink();

// проверка формы
/*const NAME_REGEXP = /^[А-Я][а-яё]*$/;
const PHONE_REGEXP = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
const formContact = document.querySelector('#form-contact');
const submit = formContact.querySelector('.form__button');
const name = formContact.name;
const phone = formContact.phone;

const isNameValid = (value) => {
  const rezult = NAME_REGEXP.test(value);
  return rezult;
};

const isPhoneValid = (value) => {
  const rezult = PHONE_REGEXP.test(value);
  return rezult;
};

function validate(evt) {

  console.log(name.value, phone.value);
  if(!isNameValid(name.value)) {
    name.style.borderBottom = '1px solid #ff121f';
  } else {
    name.style.borderBottom = '1px solid #74819c';
  }

  if(!isPhoneValid(phone.value)) {
    phone.style.borderBottom = '1px solid #ff121f';
  } else {
    phone.style.borderBottom = '1px solid #74819c';
  }
  evt.preventDefault();
}
submit.addEventListener('click', validate);
*/
