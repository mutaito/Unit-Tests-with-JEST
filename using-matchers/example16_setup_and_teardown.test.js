var dataBaseCity = [];
const initializeCityDatabase = () => {
    dataBaseCity.push('Coquimbo');
    dataBaseCity.push('Santiago');
    dataBaseCity.push('Manquehue');
}
const clearCityDatabase = () => {
    dataBaseCity = [];
}
const isCity = (city) => {
    return (dataBaseCity.filter(str => str == city).length > 0) ? true : false;
    // return (dataBaseCity[0] === city) ? true : false;
}

beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

test('city database has Coquimbo', () => {
    expect(isCity('Coquimbo')).toBeTruthy();
});

test('city database has Santiago', () => {
    expect(isCity('Santiago')).toBeTruthy();
});