// const cardsContext = require.context('../img/cards', false, /\.svg$/);

export function drawCardValidator() {
  const container = document.querySelector('.container');

  const cardValidator = document.createElement('div');
  cardValidator.classList.add('card-validator');

  const title = document.createElement('h3');
  title.classList.add('validator-title');
  title.textContent = 'Check your credit card number';

  const cardsContainer = document.createElement('ul');
  cardsContainer.classList.add('cards');

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

  container.append(cardValidator);
  cardValidator.append(title);
  cardValidator.append(cardsContainer);
  cardValidator.append(form);
  form.append(input);
  form.append(button);
}

export function drawCards(cards) {
  const cardsContainer = document.querySelector('.cards');

  cards.forEach(card => {
    const cardEl = document.createElement('li');

    const img = document.createElement('img');
    img.src = require(`../img/cards/${card.name}.svg`);
    img.alt = card.name;
    img.dataset.cardName = card.name; 

    cardsContainer.append(cardEl);
    cardEl.append(img);
  });
}