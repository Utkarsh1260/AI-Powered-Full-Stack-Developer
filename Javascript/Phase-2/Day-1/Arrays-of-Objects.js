/*
===========================================================
07 — ARRAYS OF OBJECTS
===========================================================

One of the most important patterns in real applications.

Array = collection
Object = individual item
*/


const students = [

    {
        name: "Aman",
        marks: [80, 90, 75]
    },

    {
        name: "Priya",
        marks: [95, 85, 92]
    },

    {
        name: "Raj",
        marks: [60, 55, 70]
    }

];


// =========================================================
// GET AVERAGE
// =========================================================

function getAverage(marks) {

    return marks.reduce(
        (sum, mark) => sum + mark,
        0
    ) / marks.length;

}


// =========================================================
// GET GRADE
// =========================================================

function getGrade(avg) {

    if (avg >= 90) return "A";

    if (avg >= 75) return "B";

    if (avg >= 60) return "C";

    return "F";

}


// =========================================================
// PROCESS STUDENTS
// =========================================================

students.forEach(student => {

    const average =
        getAverage(student.marks);

    const grade =
        getGrade(average);

    console.log(
        `${student.name}: ${average.toFixed(2)} - ${grade}`
    );

});


// =========================================================
// MAP
// =========================================================

const names = students.map(
    student => student.name
);

console.log(names);


// =========================================================
// FILTER
// =========================================================

const highScorers = students.filter(
    student => getAverage(student.marks) >= 75
);

console.log(highScorers);


// =========================================================
// FIND
// =========================================================

const student = students.find(
    student =>
        student.marks.some(mark => mark > 90)
);

console.log(student);


// =========================================================
// SOME
// =========================================================

const hasTopStudent = students.some(
    student => getAverage(student.marks) >= 90
);

console.log(hasTopStudent);


// =========================================================
// EVERY
// =========================================================

const allPassed = students.every(
    student => getAverage(student.marks) >= 60
);

console.log(allPassed);