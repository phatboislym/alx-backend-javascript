const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    const result1 = calculateNumber(3.2, 4.6);
    assert.strictEqual(result1, 8);

    const result2 = calculateNumber(-2.8, 1.4);
    assert.strictEqual(result2, -2);

    const result3 = calculateNumber(5, 7);
    assert.strictEqual(result3, 12);
  });
});
