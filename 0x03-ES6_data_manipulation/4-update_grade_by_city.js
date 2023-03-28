export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  let arr = [];
  const array = getListStudents;
  if (!Array.isArray(array) || typeof city !== 'string') {
    return (arr);
  }

  arr = array
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      const newGrade = grade ? grade.grade : 'N/A';
      return { ...student, grade: newGrade };
    });
  return (arr);
}
