import elemFromPage from './elemFromPage.js';

const {
  inputName,
  inputExpiry,
  inputCvv,
  cardName,
  cardNameBack,
  cardExpiry,
  cardCvv,
} = elemFromPage;

const inputValid = (regEx, input) => {
  if (regEx.test(input.value) || input.value === '') {
    input.style.boxShadow = '';
  } else {
    input.style.boxShadow = '5px 10px 10px rgba(0, 0, 0, 0.25)';
  }
};

const formatName = () => {
  inputName.value = inputName.value.replace(/[^A-Z\s]/i, '');
  cardName.textContent = inputName.value;
  cardNameBack.textContent = inputName.value;
  const regexName = /^([A-Z]+)\s([A-Z]+)$/i;
  inputValid(regexName, inputName);
};

const formatExpiry = () => {
  const expiry = inputExpiry.value.replace(/[^\d]/g, '').substring(0, 4);
  const regexExpiry = /^(0[1-9]|1[0-2])\/(2[3-9])$/;
  inputExpiry.value = expiry !== '' ? expiry.match(/.{1,2}/g).join('/') : '';
  cardExpiry.textContent = inputExpiry.value;
  inputValid(regexExpiry, inputExpiry);
};

const formatCvv = () => {
  const cvv = inputCvv.value.replace(/[^\d]/g, '').substring(0, 3);
  const regexCvv = /^\d{3}$/;
  inputCvv.value = cvv !== '' ? cvv.match(/.{1,3}/g) : '';
  cardCvv.textContent = inputCvv.value;
  inputValid(regexCvv, inputCvv);
};

export default {
  inputValid,
  formatName,
  formatExpiry,
  formatCvv,
};
