import { sum, assigner } from "./tests";


test('should add 3 + 4 = 7', () => {
   expect(sum(3, 4)).toBe(7);
});

test('should add to object given property with given value', () => {
   const abje = {};
   assigner(abje, 'prop', 2);
   expect(abje).toEqual({prop: 2})
});

test('object should not stay empty', () => {
   const abje = {};
   assigner(abje, 'prop', 2);
   expect(abje).not.toEqual({})
});

test('null', () => {
   const n = null;
   expect(n).toBeNull();
   expect(n).toBeDefined();
   expect(n).not.toBeUndefined();
   expect(n).not.toBeTruthy();
   expect(n).toBeFalsy();
});

test('zero', () => {
   const z = 0;
   expect(z).not.toBeNull();
   expect(z).toBeDefined();
   expect(z).not.toBeUndefined();
   expect(z).not.toBeTruthy();
   expect(z).toBeFalsy();
});

test('numbers', () => {
   const number = sum(2,2);

   expect(number).toBeGreaterThan(3);
   expect(number).toBeGreaterThanOrEqual(4);
   expect(number).toBeLessThan(5);
   expect(number).toBeLessThanOrEqual(5);

   const nunumber = sum(0.2, 0.3);

   expect(nunumber).toBeCloseTo(0.5);
});

test('string includes the best name part in the world', () => {
   const name = 'Anatoliy'
   expect(name).toMatch(/tol/)
});

const shoppingList = [
   'diapers',
   'kleenex',
   'trash bags',
   'paper towels',
   'beer',
];

test('the shopping list has beer on it', () => {
   expect(shoppingList).toContain('beer');
   expect(new Set(shoppingList)).toContain('beer');
});

function compileAndroidCode() {
   throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
   expect(compileAndroidCode).toThrow();
   expect(compileAndroidCode).toThrow(Error);

   // You can also use the exact error message or a regexp
   expect(compileAndroidCode).toThrow('you are using the wrong JDK');
   expect(compileAndroidCode).toThrow(/JDK/);
});
const asyncShtuka = async (callback = () => {}) => {
    await setTimeout(() => {}, 500);
    callback(2);
    return 2
};

test('testing async code', (done) => {
    // я думаю це краще з генераторами робити, а для проиісів є краще нижче
    function callback(data) {
        try {
            expect(data).toBe(2);
            done();
        } catch (error) {
            done(error);
        }
    }

    asyncShtuka(callback);
});

test('promise code', () => {
   return asyncShtuka().then(data => {
       expect(data).toBe(2)
   })
});