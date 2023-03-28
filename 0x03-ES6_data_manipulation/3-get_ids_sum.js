export default function getStudentIdsSum(array) {
  let sum = 0;
  if (!Array.isArray(array)) {
    return (sum);
  }
  sum = array.reduce((acc, student) => acc + student.id, 0);
  return (sum);
}
