import { validateCard } from './validateCard';
import { detectCard } from './detectCard';

export default class CardValidator{
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.cards = null;;
  }

  drawCardValidator() {
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

    const tooltip = document.createElement('span');
    tooltip.classList.add('card-validator_tooltip');

    this.parentEl.append(cardValidator);
    cardValidator.append(title);
    cardValidator.append(this.cards);
    cardValidator.append(form);
    form.append(input);
    form.append(button);
    form.append(tooltip);
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

  handler() {
    const form = this.parentEl.querySelector('.validator-form');
    const input = this.parentEl.querySelector('.card-validator_input');
    const tooltip = this.parentEl.querySelector('.card-validator_tooltip');

    // при вводе в инпут — определяем карту
    input.addEventListener('input', () => {
      const value = input.value;
      const system = detectCard(value);

      if (this.checkInput(value)) return;

      this.cards.querySelectorAll('img').forEach(img => {
        img.classList.remove('inactive');
        if (system && img.dataset.cardName !== system) {
          img.classList.add('inactive');
        }
      });
    });

    // при сабмите — проверяем по алгоритму Луна
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = input.value;

      if (this.checkInput(value)) return;

      const isValid = validateCard(value);

      if (isValid) {
        tooltip.textContent = 'The card number is valid';
        input.classList.add('valid');
        input.classList.remove('invalid');
      } else {
        tooltip.textContent = 'The card number is invalid';
        input.classList.add('invalid');
        input.classList.remove('valid');
      }
    });
  }

  checkInput(value) {
    const input = this.parentEl.querySelector('.card-validator_input');
    const tooltip = this.parentEl.querySelector('.card-validator_tooltip');

    if (/[^0-9\s]/.test(value)) {
      tooltip.textContent = 'Please insert a credit card number';
      input.classList.add('invalid');
      input.classList.remove('valid');
      return true;
    } else {
      tooltip.textContent = '';
      input.classList.remove('invalid');
      return false;
    }
  }
}