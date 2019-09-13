// Existen múltiples matchers equivalentes para la comprobación de números.

test('dos mas dos', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe y toEqual son equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

//>>> Number Floating
//toBeCloseTo es similar a toEqual pero funciona paracls puntos flotantes
test('adding floating point numbers', () => {
    console.log("Number floating");
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });