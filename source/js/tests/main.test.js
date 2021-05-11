const sum = require('../main')['sum'];

test('Testing adds 3 + 2', () => {
    expect(sum(3, 2)).toBe(5);
});