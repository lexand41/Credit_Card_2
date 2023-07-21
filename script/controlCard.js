/* eslint-disable no-undef */
import elemFromPage from './elemFromPage.js';
import controlCard from './formatInputs.js';
import mask from './mask.js';

const {
  cardForm,
  inputName,
  inputNumber,
  inputExpiry,
  inputCvv,
  cardNumber,
  lightColor,
  darkColor,
  creditCard,
  cardIcon,
  cardLogo,
} = elemFromPage;

const {
  inputValid,
  formatName,
  formatExpiry,
  formatCvv,
} = controlCard;

const inputMasks = [
  /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
  /^\d{4}\s\d{6}\s\d{5}$/,
  /^\d{4}\s\d{6}\s\d{4}$/,
];

const swapColor = (color = 'grey') => {
  lightColor.forEach(input => {
    input.classList.remove('grey');
    input.setAttribute('fill', color);
  });
  darkColor.forEach(input => {
    input.setAttribute('class', `darkcolor ${color} dark`);
  });
};

const resetColor = () => {
  inputNumber.style.boxShadow = '';
  cardIcon.innerHTML = cardIcon;
  cardLogo.innerHTML = '';
  cardNumber.textContent = '0123 4567 8910 1112';
  lightColor.forEach(input => {
    input.setAttribute('class', `lightcolor grey`);
  });
  darkColor.forEach(input => {
    input.setAttribute('class', `darkcolor greydark`);
  });
};

cardForm.addEventListener('input', e => {
  e.preventDefault();
  const target = e.target;
  if (target === inputName) formatName();
  if (target === inputExpiry) formatExpiry();
  if (target === inputCvv) formatCvv();
  if (target === inputNumber) {
    cardNumber.textContent = inputNumber.value;
    // Credit card number formatting from "Cleave.js"
    new Cleave('.my-input', {
      creditCard: true,
    });

    mask.forEach(bank => {
      const regex = new RegExp(`${bank.regex}`);
      if (regex.test(inputNumber.value)) {
        swapColor(bank.color);
        cardIcon.innerHTML = bank.icon;
        cardLogo.innerHTML = bank.logo;
        inputMasks.forEach(el => {
          if (el.test(bank.mask)) inputValid(el, inputNumber);
        });
      }
      if (inputNumber.value === '') resetColor();
    });
  }
});

// класс "flipped" что-бы перевернуть карту
creditCard.addEventListener('click', () => {
  creditCard.classList.toggle('flipped');
});

inputCvv.addEventListener('click', () => {
  creditCard.classList.add('flipped');
});

