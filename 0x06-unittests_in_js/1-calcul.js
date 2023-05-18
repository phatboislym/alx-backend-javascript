// function `calculateNumber`

function calculateNumber (type, a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    if (type === 'SUM') {
      const c = Math.round(a) + Math.round(b);
      return c;
    } else if (type === 'SUBTRACT') {
      const c = Math.round(a) - Math.round(b);
      return c;
    } else if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      } else {
        const c = Math.round(a) / Math.round(b);
        return c;
      }
    }
  }
}

module.exports = calculateNumber;
