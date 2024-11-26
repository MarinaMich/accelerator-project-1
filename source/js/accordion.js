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

// обработка текущего вопроса

const itemHandler = (evt) => {
  evt.preventDefault();
  const currentItem = evt.target.closest('li h3');
  const currentButton = evt.target.closest('li h3 button');
  const currentText = currentItem.nextElementSibling;
  if (currentText.offsetHeight === 0) {
    currentText.style.maxHeight = currentText.scrollHeight + 'px';
    currentText.style.paddingTop = '20px';
  } else {
    currentText.style.maxHeight = 0;
    currentText.style.paddingTop = 0;
  }
};

// выбор по клику вопроса

const handler = () => {
  const faqsListCurrent = document.querySelector('.faqs__list--current');
  const faqsItems = faqsListCurrent.querySelectorAll('li');

  faqsItems.forEach((item) => {
    item.addEventListener('click', itemHandler);
  });
};

// открытие вкладки текущего таба и возможность выбрать в ней вопрос

const selectionTab = (cb) => {
  faqsTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      currentTab = index;
      thisTab(currentTab);
      cb();
    });
    cb();
  });
};

selectionTab(handler);
