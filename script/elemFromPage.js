const cardForm = document.querySelector('.form-container');
const inputName = document.getElementById('name');
const inputNumber = document.getElementById('cardnumber');
const inputExpiry = document.getElementById('expirationdate');
const inputCvv = document.getElementById('securitycode');
const cardNumber = document.getElementById('svgnumber');
const cardName = document.getElementById('svgname');
const cardNameBack = document.getElementById('svgnameback');
const cardExpiry = document.getElementById('svgexpire');
const cardCvv = document.getElementById('svgsecurity');
const lightColor = document.querySelectorAll('.lightcolor');
const darkColor = document.querySelectorAll('.darkcolor');
const creditCard = document.querySelector('.creditcard');
const cardIcon = document.getElementById('ccicon');
const cardLogo = document.getElementById('cclogo');

export default {
  cardForm,
  inputName,
  inputNumber,
  inputExpiry,
  inputCvv,
  cardNumber,
  cardName,
  cardNameBack,
  cardExpiry,
  cardCvv,
  lightColor,
  darkColor,
  creditCard,
  cardIcon,
  cardLogo,
};
