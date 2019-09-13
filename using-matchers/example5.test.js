// Strings
// Puede probar cadenas contra expresiones regulares con toMatch:

console.log("######## String testing ########");
// test('no hay I en Team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('hay "stop" en Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });

test('Haciendo Match con "Palabrita"', () => {
  expect('Palabrita').toMatch("Palabrita");
});