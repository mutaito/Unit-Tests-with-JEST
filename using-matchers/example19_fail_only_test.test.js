// Aviso General
// Si una prueba falla, una de las primeras cosas a revisar debería ser si la prueba falla cuando se 
// corre solo esa prueba. 
// En Jest es simple correr una sola prueba - solo cambia temporalmente ese comando test a test.only:
test.only('this will be the only test that runs', () => {
    expect(true).toBe(false);
    // expect(true).toBe(true);
});

test('this test will not run', () => {
    expect('A').toBe('A');
});
// Si tienes una prueba que a menudo falla cuando es una parte de una ejecución de una larga suite, 
// pero no falla cuando la corres sola, es una buena apuesta que algo de otra prueba diferente está 
// interfiriendo con esta. A menudo puedes arreglar esto limpiando algo de estados compartidos con 
// beforeEach. Si no estas seguro de que algo de estados compartidos está siendo compartido, puedes 
// también probar un beforeEach que simplemente imprime los datos.