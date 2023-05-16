// function `countStudents`
// accepts a database path param, attempts to read the database synchronously
// if the database is not available, it throws an error
const fs = require('fs');

const readFile = fs.readFileSync;

function countStudents(filepath) {
  try {
    const data = readFile(filepath, 'utf8');
    let students = data.trim().split('\n').slice(1);
    students = students.map((student) => student.split(','));
    const SWE = students.filter((student) => student[3] === 'SWE');
    const SWECount = SWE.length;
    const studentsInSWE = SWE.map((student) => student[0]);
    const CS = students.filter((student) => student[3] === 'CS');
    const CSCount = CS.length;
    const studentsInCS = CS.map((student) => student[0]);
    const CSNames = studentsInCS.join(', ');
    const SWENames = studentsInSWE.join(', ');
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${CSCount}. List: ${CSNames}`);
    console.log(`Number of students in SWE: ${SWECount}. List: ${SWENames}`);
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
