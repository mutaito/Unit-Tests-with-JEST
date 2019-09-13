// toBeNull coincide solo con null
// toBeUndefined coincide solo con undefined
// toBeDefinedes el opuesto a toBeUndefined
// toBeTruthy coincide con lo que sea que el condicional if devuelva como true
// toBeFalsy coincide con lo que sea que el condicional if devuelva como false

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('cero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });