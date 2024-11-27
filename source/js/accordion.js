const faqsTabs = document.querySelectorAll('.faqs__tab');
const faqsLists = document.querySelectorAll('.faqs__list');
let currentTab;

// определение текущего таба

const thisTab = (index) => {
  faqsTabs.forEach((tab) => tab.classList.remove('faqs__tab--current'));
  faqsLists.forEach((list) => list.classList.remove('faqs__list--current'));
  faqsTabs[index].classList.add('faqs__tab--current');
  faqsLists[index].classList.add('faqs__list--current');
};

const itemFirstOpen = () => {
  const listCurrent = document.querySelector('.faqs__list--current');
  const itemFirst = listCurrent.firstElementChild;
  const itemText = itemFirst.querySelector('.faqs__content h3').nextElementSibling;
  itemText.style.maxHeight = itemText.scrollHeight + 'px';
  itemFirst.classList.add('faqs__item--open');
  itemFirst.firstElementChild.classList.add('faqs__content--open');
};

// обработка текущего вопроса

const itemHandler = (evt) => {
  evt.preventDefault();
  const item = evt.target.closest('.faqs__item');
  const currentContent = evt.target.closest('.faqs__content');
  const currentTitle = evt.target.closest('.faqs__content h3');
  const currentText = currentTitle.nextElementSibling;

  if (currentText.offsetHeight === 0) {
    currentText.style.maxHeight = currentText.scrollHeight + 'px';
    currentContent.classList.add('faqs__content--open');
    item.classList.add('faqs__item--open');
  } else {
    currentText.style.maxHeight = 0;
    currentContent.classList.remove('faqs__content--open');
    item.classList.remove('faqs__item--open');
  }
};

// выбор по клику вопроса

const handler = () => {
  const faqsListCurrent = document.querySelector('.faqs__list--current');
  const faqsItems = faqsListCurrent.querySelectorAll('.faqs__item');

  faqsItems.forEach((item) => {
    item.addEventListener('click', itemHandler);
  });
};

// открытие вкладки текущего таба и возможность выбрать в ней вопрос

const selectionTab = (cb) => {
  itemFirstOpen();
  faqsTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      currentTab = index;
      thisTab(currentTab);
      itemFirstOpen();
      cb();
    });
    cb();
  });
};

selectionTab(handler);
