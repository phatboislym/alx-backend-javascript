export default function cleanSet(set, startString) {
  let string = '';
  if (typeof set !== 'object' || !(set instanceof Set) || typeof startString !== 'string' || !set || !startString) {
    return (string);
  }
  const array = [];
  set.forEach((values) => {
    if (typeof values === 'string' && values.startsWith(startString)) {
      const string = values.substring(startString.length);
      if (string) {
        array.push(string);
      }
    }
  });
  string += array[0];
  for (let i = 1; i < array.length; i += 1) {
    string += `-${array[i]}`;
  }
  return (string);
}
