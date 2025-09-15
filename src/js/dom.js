import { validateCard } from './validateCard';
import { detectCard } from './detectCard';

export default class CardValidator{
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.cards = null;;
  }

  drawCardValidator() {
    this.parentEl = document.querySelector('.container');

    const cardValidator = document.createElement('div');
    cardValidator.classList.add('card-validator');

    const title = document.createElement('h3');
    title.classList.add('validator-title');
    title.textContent = 'Check your credit card number';

    this.cards = document.createElement('ul');
    this.cards.classList.add('cards');

    const form = document.createElement('form');
    form.classList.add('validator-form');

    const input = document.createElement('input');
    input.classList.add('card-validator_input');
    input.type = 'text';
    input.name = 'validator';
    input.id = 'cardValidatorInput';
    input.placeholder = 'Credit card number';

    const button = document.createElement('button');
    button.classList.add('card-validator_button');
    button.type = 'submit';
    button.textContent = 'Click to Validate';

    this.parentEl.append(cardValidator);
    cardValidator.append(title);
    cardValidator.append(this.cards);
    cardValidator.append(form);
    form.append(input);
    form.append(button);
  }

  drawCards(cards) {
    cards.forEach(card => {
      const cardEl = document.createElement('li');

      const img = document.createElement('img');
      img.src = require(`../img/cards/${card.name}.svg`);
      img.alt = card.name;
      img.dataset.cardName = card.name; 

      this.cards.append(cardEl);
      cardEl.append(img);
    });
  }
}