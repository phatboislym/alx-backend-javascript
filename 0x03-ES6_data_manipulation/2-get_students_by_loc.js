export default function getListStudentIds(array, city) {
  let arr = [];
  if (!Array.isArray(array)) {
    return (arr);
  }
  arr = array.filter((student) => student.location === city);

  return (arr);
}
