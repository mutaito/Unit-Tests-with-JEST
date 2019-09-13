test('asignacion de objeto', () => {
    const data = { uno: 1, tres: 3 };
    data['dos'] = 2;
    expect(data).toEqual({ uno: 1, dos: 2, tres: 3 });//Compara que dos objetos sean iguales tanto clave como valor
});