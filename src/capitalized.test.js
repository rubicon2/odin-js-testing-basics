const capitalized = require('./capitalized');

test('capitalizes the first character in a string', () => {
  expect(capitalized('mega')).toBe('Mega');
});

test('capitalizes the first character in a string', () => {
  expect(capitalized('ploppers')).toBe('Ploppers');
});

test("doesn't change pre-capitalized string", () => {
  expect(capitalized('PLOPPERS')).toBe('PLOPPERS');
});

test("doesn't change pre-capitalized string", () => {
  expect(capitalized('Ploppers')).toBe('Ploppers');
});

test("doesn't try to capitalize an empty string", () => {
  expect(capitalized('')).toBe('');
});

test("doesn't try to capitalize a string number", () => {
  expect(capitalized('97')).toBe('97');
});

test('if string is actually typeof number, return string but otherwise do nothing', () => {
  expect(capitalized(97)).toBe('97');
});

test('work with one-character string', () => {
  expect(capitalized('p')).toBe('P');
});
