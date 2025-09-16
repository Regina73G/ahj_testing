import { validateCard } from '../validateCard';

test('валидный VISA номер', () => {
  expect(validateCard('4111111111111111')).toBe(true);
});

test('невалидный номер', () => {
  expect(validateCard('4111 1111 1111 1112')).toBe(false);
});

test('невалидный номер при вводе букв', () => {
  expect(validateCard('aaaaa')).toBe(false);
});

test('игнорирует пробелы и дефисы', () => {
  expect(validateCard('4111-111 1-1111- 1111')).toBe(true);
});