let prompt = require("prompt-sync")();

let students = [
  { name: "Aman", marks: [80, 90, 75] },
  { name: "Priya", marks: [95, 85, 92] },
  { name: "Raj", marks: [60, 55, 70] },
];

//enter students name
console.log("Select the student to know his Grade");
let student = prompt("Enter student name: ").toLowerCase();
findStudent(student);

//find student in array then total marks then avg
function findStudent(student) {
  let index = students.findIndex((s) => s.name.toLowerCase() === student);


if (index === -1) {
    console.log("Student not found");
    return;
}

  // find total marks and avg
  let totalMarks = students[index].marks.reduce((acc, mark) => acc + mark, 0);
  let avgMarks = totalMarks / students[index].marks.length;
  assignGrade(avgMarks);
}

//get marks and call grade function
function assignGrade(avgMarks) {

      if (avgMarks < 0 || avgMarks > 100) {
    console.log("Invalid marks");
      }

  if (avgMarks >= 90 && avgMarks <= 100) {
    console.log("Grade: A+");
  } else if (avgMarks >= 80) {
    console.log("Grade: A");
  } else if (avgMarks >= 70) {
    console.log("Grade: B");
  } else if (avgMarks >= 60) {
    console.log("Grade: C");
  } else if (avgMarks >= 50) {
    console.log("Grade: D");
  } else if (avgMarks >= 33) {
    console.log("Grade: E");
  } else if (avgMarks >= 0) {
    console.log("Grade: F (Fail)");
  } else {
    console.log("Invalid marks");
  }
}
