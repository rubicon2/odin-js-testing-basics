const Calculator = require('./calculator');

test('add method adds 2 and 97 correctly', () => {
  expect(Calculator.add(2, 97)).toBe(99);
});

test('add method throws an error if either of the provided arguments are not numbers', () => {
  expect(() => Calculator.add(2, '97')).toThrow();
});

test('subtract method: 97 - 2 should be 95', () => {
  expect(Calculator.sub(97, 2)).toBe(95);
});

test('subtract method: 2 - 97 should be -95', () => {
  expect(Calculator.sub(2, 97)).toBe(-95);
});

test('subtract method throws an error if either of the provided arguments are not numbers', () => {
  expect(() => Calculator.sub(2, '97')).toThrow();
});

test('multiply method: 2 and 97 should give 194', () => {
  expect(Calculator.multiply(2, 97)).toBe(194);
});

test('divide method: 2 and 97 should give 194', () => {
  expect(Calculator.divide(2, 97)).toBeCloseTo(0.02061856);
});

test('divide by zero should throw error', () => {
  expect(() => Calculator.divide(2, 0)).toThrow();
});
