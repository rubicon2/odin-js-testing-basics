const analyzeArray = require('./analyzeArray');

test('average calculates correctly', () => {
  expect(analyzeArray([1, 2, 3, 4]).average).toBeCloseTo(2.5);
});

test('average calculates correctly', () => {
  expect(analyzeArray([2.4, 4.6, 6.8, 8.1]).average).toBeCloseTo(5.475);
});

test('average is null with a zero length input', () => {
  expect(analyzeArray([]).average).toBe(null);
});

test('min calculates correctly', () => {
  expect(analyzeArray([1, 2, 3, 4]).min).toBe(1);
});

test('min calculates correctly', () => {
  expect(analyzeArray([-2.4, 8.1, -4.6, 6.8]).min).toBe(-4.6);
});

test('max calculates correctly', () => {
  expect(analyzeArray([1, 2, 3, 4]).max).toBe(4);
});

test('max calculates correctly', () => {
  expect(analyzeArray([-2.4, 8.1, -4.6, 6.8]).max).toBe(8.1);
});

test('length calculates correctly', () => {
  expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
});

test('length calculates correctly', () => {
  expect(analyzeArray([1, 2, 3, 4, -9, -12, 97]).length).toBe(7);
});

test('length calculates correctly with a zero length input', () => {
  expect(analyzeArray([]).length).toBe(0);
});

test('min gives null with a zero length input', () => {
  expect(analyzeArray([]).min).toBe(null);
});

test('max gives null with a zero length input', () => {
  expect(analyzeArray([]).max).toBe(null);
});
