const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})
test("One yen should be 0.066 dollars", function() {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(1);
    const expected = 1 * 0.0066;
    expect(fromDollarToYen(1)).toBe(0.0066);
})
test("One yen should be 192.33 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(1);
    const expected = 1 * 192.33;
    expect(fromYenToPound(1)).toBe(192.33);
})