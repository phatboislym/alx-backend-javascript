// function `calculateNumber`
//      takes two number params, a and b, rounds them and returns their sum

function calculateNumber (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    const c = Math.round(a) + Math.round(b);
    return c;
  }
}

module.exports = calculateNumber;
