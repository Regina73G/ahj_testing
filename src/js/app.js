import CardValidator from './dom';
import cards from './cards.json';

const parentEl = document.querySelector('.container');
const cardValidator = new CardValidator(parentEl);

cardValidator.drawCardValidator();
cardValidator.drawCards(cards);
cardValidator.handler();