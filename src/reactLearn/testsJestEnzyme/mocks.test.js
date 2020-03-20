const mockCallback = jest.fn(x => 42 + x);

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test('', () => {
    forEach([12, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    console.log(mockCallback.mock.calls[0]);
    expect(mockCallback.mock.calls[0][0]).toBe(12);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(54);
});
// neh скукотінь
// спочатку було ок але потім стало жахливо нудно
// може колись повернусь до тестів
// але зараз я їх взагалі вчити не можу
// а може  просто морально втомився
// зараз 20 березня 20 року
// може мені полегшає через пару днів)))