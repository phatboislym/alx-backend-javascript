const Utils = {
  calculateNumber(type, a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      if (type === 'SUM') {
        const c = Math.round(a) + Math.round(b);
        return c;
      } if (type === 'SUBTRACT') {
        const c = Math.round(a) - Math.round(b);
        return c;
      } if (type === 'DIVIDE') {
        if (Math.round(b) === 0) {
          return 'Error';
        }
        const c = Math.round(a) / Math.round(b);
        return c;
      }
    }
  },
};

module.exports = Utils;
