export default function hasValuesFromArray(set, array) {
  let bool = false;
  if (!typeof set === 'object' || !(set instanceof Set) || !Array.isArray(array)) {
    return (bool);
  }
  bool = array.every((value) => set.has(value));
  return (bool);
}
