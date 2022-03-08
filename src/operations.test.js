const operation = require('./operations');

test("5 + 7 must be equal to 12", ()=> {
    expect(operation.sum(5, 7)).toBe(12);
});

test("5 - 7 must be equal to -2", ()=> {
    expect(operation.diff(5, 7)).toBe(-2);
});

test("49 / 7 must be equal to 7", ()=> {
    expect(operation.div(49, 7)).toBe(7);
});

test("5 * 7 must be equal to 35", ()=> {
    expect(operation.prod(5, 7)).toBe(35);
});

test("5 / 0 is not a valid operation", ()=> {
    expect(operation.div(5, 0)).toBe('Error. Cannot divide by zero!');
});
