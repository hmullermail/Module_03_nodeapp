const factorial = require('./factorial')

test("0! must be equal to 1", ()=> {
    expect(factorial(0)).toBe(1);
});

test("1! must be equal to 1", ()=> {
    expect(factorial(1)).toBe(1);
});

test("2! must be equal to 2", ()=> {
    expect(factorial(2)).toBe(2);
});

test("3! must be equal to 6", ()=> {
    expect(factorial(3)).toBe(6);
});

test("4! must be equal to 24", ()=> {
    expect(factorial(4)).toBe(24);
});

test("5! must be equal to 120", ()=> {
    expect(factorial(5)).toBe(120);
});

test("-1! does not exist", ()=> {
    expect(factorial(-1)).toBe("Error. Argument must be a positive integer");
});