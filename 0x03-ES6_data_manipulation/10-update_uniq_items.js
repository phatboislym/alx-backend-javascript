export default function updateUniqueItems(map) {
  if (typeof map !== 'object' || !(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const updatedGroceries = map.forEach((key, value) => {
    if (key === 1) {
      map.set(value, 100);
    }
  });
  return (updatedGroceries);
}
