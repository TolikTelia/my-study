let data = [];

const fetchData = async (anotherData = false) => {
  data = anotherData ? ['Vika','Dotsya','Mikhailivna'] : ['Anatoliy', 'Zhurilo', 'Mikhailovich']
};

const clearData = async () => {
  data = []
};

describe('this tests have their own block', () => {
  // beforeEach
  beforeAll(() => {
    return fetchData() // return for promises
  });
// afterEach
  afterAll(() => {
    return clearData() // return for promises
  });

  test('should contain my surname', () => {
    expect(data).toContain('Zhurilo')
  });

  test('should contain my name', () => {
    expect(data).toContain('Anatoliy')
  });
});

describe('this tests have their own block too', () => {
  beforeAll(() => {
    return fetchData(true)
  });
  afterAll(() => {
    return clearData()
  });

  test('should contain Vika', () => {
    expect(data).toContain('Vika')
  });
});

test.only('will test only this,' +
    'so you can check which is fails,' +
    'but I do not know: console shows which' +
    'fails and where)).' +
    'other tests will be skipped', () => {
  expect(true).toBe(true)
});