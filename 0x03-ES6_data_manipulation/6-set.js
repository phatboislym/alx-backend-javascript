export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    return ({});
  }
  const arraySet = new Set(array);

  return (arraySet);
}
