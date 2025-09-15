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

const cardValidator = new CardValidator();

cardValidator.drawCardValidator();
cardValidator.drawCards(cards);