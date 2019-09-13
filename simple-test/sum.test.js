const sum = require('./sum');

test('sum 5 + 3 es igual a 8', () => {
  expect(sum(5, 3)).toBe(8);
});
