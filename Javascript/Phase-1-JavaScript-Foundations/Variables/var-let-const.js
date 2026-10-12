// Basic Differences Between var, let, and const

// 1. Reassignment

var namee = "Utkarsh";
namee = "Rahul";
console.log(namee); // Rahul

let score = 10;
score = 20;
console.log(score); // 20

const country = "India";
// country = "USA"; // TypeError
console.log(country); // India


// 2. Re-declaration

var age = 20;
var age = 21;
console.log(age); // 21

let marks = 80;
// let marks = 90; // SyntaxError

const pi = 3.14;
// const pi = 3.14159; // SyntaxError


// 3. Scope

if (true) {
    var a = "var";
    let b = "let";
    const c = "const";
}

console.log(a); // var
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError


// 4. Hoisting

console.log(x); // undefined
var x = 100;

// console.log(y); // ReferenceError
let y = 200;

// console.log(z); // ReferenceError
const z = 300;


// 5. Practical Example

const student = "Utkarsh";
let totalMarks = 0;

totalMarks += 25;
totalMarks += 35;
totalMarks += 40;

console.log("Student:", student);
console.log("Total Marks:", totalMarks);
console.log("Result:", totalMarks >= 40 ? "Pass" : "Fail");