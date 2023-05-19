
const calculateNumber = require('./2-calcul');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  it('performs operation of type param on rounded number params', () => {
    expect(calculateNumber('SUM', 3.2, 4.6)).to.equal(8);

    expect(calculateNumber('SUBTRACT', -2.8, 1.4)).to.equal(-4);

    expect(calculateNumber('DIVIDE', 50, 25)).to.equal(2);

    expect(calculateNumber('DIVIDE', 5, 0.5)).to.equal('Error');
  });
});
