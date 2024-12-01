const form = document.getElementById('form-contact');
const inputList = Array.from(form.querySelectorAll('.form__type-input'));
const buttonElement = form.querySelector('.form__button');

const checkLengthMismatch = (inputElement) => {
  if (inputElement.type !== 'text') {
    return '';
  }
  const valueLength = inputElement.value.trim().length;
  if (valueLength < inputElement.minLength) {
    return `Минимальное количество символов: ${inputElement.minLength}`;
  }
  return '';
};

const checkInputValidity = (inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity(checkLengthMismatch(inputElement));
  }
};

const toggleErrorSpan = (inputElement, errorMessage) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  if (errorMessage) {
    inputElement.classList.add('form__type-input--error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__error--active');
  } else {
    inputElement.classList.remove('form__type-input--error');
    errorElement.textContent = '';
    errorElement.classList.remove('form__error--active');
  }
};

const toggleInputError = (inputElement) => {
  if (!inputElement.validity.valid) {
    toggleErrorSpan(inputElement, inputElement.validationMessage);
  } else {
    toggleErrorSpan(inputElement);
  }
};

const hasInvalidInput = () => {
  const result = inputList.some((inputElement) => !inputElement.validity.valid);
  return result;
};

const toggleButton = () => {
  if (hasInvalidInput()) {
    buttonElement.classList.add('form__button--disabled');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('form__button--disabled');
    buttonElement.disabled = false;
  }
};

const startValidation = () => {
  form.addEventListener('submit', (evt) => {
    if (hasInvalidInput()) {
      toggleButton();
      evt.preventDefault();
      inputList.forEach((inputElement) => {
        checkInputValidity(inputElement);
        toggleInputError(inputElement);
      });
    }
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
      toggleButton();
    });
    inputElement.addEventListener('blur', () => {
      toggleInputError(inputElement);
    });
    inputElement.addEventListener('focus', () => {
      toggleErrorSpan(inputElement);
    });
  });
  if(!hasInvalidInput()) {
    toggleButton();
    form.submit();
  }
};

startValidation();
