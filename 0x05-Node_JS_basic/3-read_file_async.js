// function `countStudents`
// accepts a database path param, attempts to read the database asynchronously
// if the database is available, it returns a Promise. else, it throws an error
const fs = require('fs');

const readFileAsync = fs.readFile;

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    readFileAsync(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.trim().split('\n').slice(1).map((student) => student.split(','));
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
        const result = {};
        resolve(result);
      }
    });
  });
}

module.exports = countStudents;
