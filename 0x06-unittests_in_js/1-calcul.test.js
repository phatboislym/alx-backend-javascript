const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('performs operation of type param on rounded number params', () => {
    const result1 = calculateNumber('SUM', 3.2, 4.6);
    assert.strictEqual(result1, 8);

    const result2 = calculateNumber('SUBTRACT', -2.8, 1.4);
    assert.strictEqual(result2, -4);

    const result3 = calculateNumber('DIVIDE', 50, 25);
    assert.strictEqual(result3, 2);

    const result4 = calculateNumber('DIVIDE', 5, 0.4);
    assert.strictEqual(result4, 'Error');
  });
});
