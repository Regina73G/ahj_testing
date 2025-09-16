import { detectCard } from '../detectCard';

  test('определяет VISA', () => {
    expect(detectCard('4111111111111111')).toBe('VISA');
  });

  test('определяет MasterCard', () => {
    expect(detectCard('555555555554444')).toBe('MasterCard');
  });

  test('определяет AmericanExpress', () => {
    expect(detectCard('371449635398431')).toBe('AmericanExpress');
  });

  test('определяет Discover', () => {
    expect(detectCard('6011111111111117')).toBe('Discover');
  });

  test('определяет JCB', () => {
    expect(detectCard('3530111333300000')).toBe('JCB');
  });

  test('определяет Diners', () => {
    expect(detectCard('30569309025904')).toBe('Diners');
  });

  test('определяет Mir', () => {
    expect(detectCard('2200 0000 0000 0053')).toBe('Mir');
  });

  test('неизвестная карта возвращает null', () => {
    expect(detectCard('1234567890123456')).toBeNull();
  });

  test('пустое значение возвращает null', () => {
    expect(detectCard(' ')).toBeNull();
  });