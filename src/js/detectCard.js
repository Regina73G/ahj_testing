export function detectCard(cardNumber) {
  const num = cardNumber.replace(/\D/g, '');

  if (num === '') return null;

  if (/^4/.test(num)) return 'VISA';
  if (/^5[1-5]/.test(num) || /^2(2[2-9][1-9]|[3-6][0-9]{2}|7[01][0-9]|720)/.test(num)) return 'MasterCard';
  if (/^3[47]/.test(num)) return 'AmericanExpress';
  if (/^6(?:011|5|4[4-9]|22)/.test(num)) return 'Discover';
  if (/^35(2[89]|[3-8][0-9])/.test(num)) return 'JCB';
  if (/^3(?:0[0-5]|[68])/.test(num)) return 'Diners';
  if (/^220[0-4]/.test(num)) return 'Mir';

  return null;
}