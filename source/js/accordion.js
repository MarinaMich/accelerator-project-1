const faqsTabs = document.querySelectorAll('.faqs__tab');
const faqsLists = document.querySelectorAll('.faqs__list');
let currentTab;

const thisTab = (index) => {
  faqsTabs.forEach((tab) => tab.classList.remove('faqs__tab--current'));
  faqsLists.forEach((list) => list.classList.remove('faqs__list--current'));
  faqsTabs[index].classList.add('faqs__tab--current');
  faqsLists[index].classList.add('faqs__list--current');
};

faqsTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    currentTab = index;
    thisTab(currentTab);
  });
});
