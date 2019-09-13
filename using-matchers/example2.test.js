test('agregando un numero positivo que no sea 0', () => {
    for (let a = 1; a < 3; a++) {
        for (let b = 1; b < 3; b++) {
            console.log(`[a: ${a} + b: ${b}]`);
            // Si es diferente de 0 pasa la prueba
            expect(a + b).not.toBe(0);
        }
    }
});