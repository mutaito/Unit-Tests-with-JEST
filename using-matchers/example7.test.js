
// Ver con mas detalle este ejemplo
function compileAndroidCode() {
  throw new ConfigError('usted usa el JDK erroneo');
  // return true;
}

test('La compilacion de android va por buen camino', () => {
  //expect(compileAndroidCode).toThrow();
  // expect(compileAndroidCode).toThrow(ConfigError);
  // Puede usar el mensaje de error exacto o regex
  expect(compileAndroidCode).toThrow('Usa el  JDK equivocado');
  // expect(compileAndroidCode).toThrow(/JDK/);
});