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
    const SWE = [];
    const studentsInSWE = [];
    const CS = [];
    const studentsInCS = [];
    for (let i = 0; i < students.length; i += 1) {
      if (students[i][3] === 'SWE') {
        SWE.push(students[i]);
        studentsInSWE.push(students[i][0]);
      } else if (students[i][3] === 'CS') {
        CS.push(students[i]);
        studentsInCS.push(students[i][0]);
      }
    }
    const CSCount = CS.length;
    const SWECount = SWE.length;
    const CSNames = studentsInCS.join(', ');
    const SWENames = studentsInSWE.join(', ');
    console.log('Number of students: %s', students.length);
    console.log('Number of students in CS: %s. List: %s', CSCount, CSNames);
    console.log('Number of students in SWE: %s. List: %s', SWECount, SWENames);
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
