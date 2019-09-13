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

describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    // beforeEach(() => {
    //   return initializeFoodDatabase();
    // });
  
    // test('Vienna <3 sausage', () => {
    //   expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    // });
  
    // test('San Juan <3 plantains', () => {
    //   expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    // });
    beforeEach(() => {
        initializeCityDatabase();
    });
    
    afterEach(() => {
        clearCityDatabase();
    });
    
    test('city database not has Coquimbox', () => {
        expect(isCity('Coquimbox')).toBeFalsy();
    });
    
    test('city database not has Santiagox', () => {
        expect(isCity('Santiagox')).toBeFalsy();
    });
  });