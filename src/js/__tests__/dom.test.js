/**
 * @jest-environment jsdom
 */

import CardValidator from '../dom.js';

let parentEl;
let validator;

describe('CardValidator renders', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="container"></div>`;
    parentEl = document.querySelector('.container');
    validator = new CardValidator(parentEl);
  });

  test('drawCardValidator отрисовывает валидатор', () => {
    validator.drawCardValidator();

    expect(parentEl.querySelector('.card-validator')).not.toBeNull();
    expect(parentEl.querySelector('.validator-form')).not.toBeNull();
    expect(parentEl.querySelector('.cards')).not.toBeNull();
    expect(parentEl.querySelector('.card-validator_input')).not.toBeNull();
    expect(parentEl.querySelector('.card-validator_button')).not.toBeNull();
    expect(parentEl.querySelector('.card-validator_tooltip')).not.toBeNull();
  });

  test('drawCardValidator отрисовывает карточки', () => {
    validator.drawCardValidator();
    validator.drawCards([
      { name: 'VISA' },
      { name: 'MasterCard' },
    ]);

    const cardsList = parentEl.querySelectorAll('.cards li');
    expect(cardsList.length).toBe(2);

    const firstImg = cardsList[0].querySelector('img');
    expect(firstImg.dataset.cardName).toBe('VISA');

    const secondImg = cardsList[1].querySelector('img');
    expect(secondImg.dataset.cardName).toBe('MasterCard');
  });
});

describe('handler', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="container"></div>`;
    parentEl = document.querySelector('.container');

    validator = new CardValidator(parentEl);
    validator.drawCardValidator();
    validator.drawCards([
      { name: 'VISA' },
      { name: 'MasterCard' },
    ]);
    validator.handler();
  });

  test('img inactive при определенной карте', () => {
    const input = parentEl.querySelector('.card-validator_input');
    const images = parentEl.querySelectorAll('img');
    input.value = '41111'; // VISA
    input.dispatchEvent(new Event('input', { bubbles: true }));

    images.forEach(img => {
      if (img.dataset.cardName !== 'VISA') {
        expect(img.classList.contains('inactive')).toBe(true);
      } else {
        expect(img.classList.contains('inactive')).toBe(false);
      }
    });

  });

  test('input invalid при вводе букв', () => {
    const input = parentEl.querySelector('.card-validator_input');
    input.value = 'abrht56u777';
    input.dispatchEvent(new Event('input'));

    expect(input.classList.contains('invalid')).toBe(true);
  });

    test('input valid после отправки правильного номера карты', () => {
    const input = parentEl.querySelector('.card-validator_input');
    const form = parentEl.querySelector('.validator-form');
    
    input.value = '5555 5555 5555 5599';
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(input.classList.contains('valid')).toBe(true);
  });

    test('input invalid после отправки неправильного номера карты', () => {
    const input = parentEl.querySelector('.card-validator_input');
    const form = parentEl.querySelector('.validator-form');
    
    input.value = '5555 5555 1234 5599';
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(input.classList.contains('invalid')).toBe(true);
  });
});