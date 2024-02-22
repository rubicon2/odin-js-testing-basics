const loopInt = require('./loopInt');

test('positive integer loops around to positive minimum', () => {
  expect(loopInt(0, 5, 9)).toBe(4);
});

test('negative integer loops around to positive maximum', () => {
  expect(loopInt(0, 5, -2)).toBe(3);
});

test('positive integer loops around to negative minimum', () => {
  expect(loopInt(-5, 5, 6)).toBe(-4);
});

test('negative integer loops around to negative maximum', () => {
  expect(loopInt(-5, 5, -6)).toBe(4);
});
