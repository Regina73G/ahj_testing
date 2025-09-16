import CardValidator from './dom';

const cards  = [
  {
    name: 'VISA',
    pattern: 1,
    lengths: 1,
  },
  {
    name: 'MasterCard',
    pattern: 1,
    lengths: 1,
  },
  {
    name: 'AmericanExpress',
    pattern: 1,
    lengths: 1,
  },
  {
    name: 'Discover',
    pattern: 1,
    lengths: 1,
  },
  {
    name: 'JCB',
    pattern: 1,
    lengths: 1,
  },
  {
    name: 'Diners',
    pattern: 1,
    lengths: 1,
  },
  {
    name: 'Mir',
    pattern: 1,
    lengths: 1,
  },
];


const parentEl = document.querySelector('.container');
const cardValidator = new CardValidator(parentEl);

cardValidator.drawCardValidator();
cardValidator.drawCards(cards);
cardValidator.handler();