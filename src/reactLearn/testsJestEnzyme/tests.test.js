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