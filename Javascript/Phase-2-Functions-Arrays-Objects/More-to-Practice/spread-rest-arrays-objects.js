// Spread with Array
let nums = [1, 2, 3];
let copy = [...nums];
console.log(copy);

// Rest with Array
let [a, ...restNums] = nums;
console.log(a, restNums);

// Spread with Object
let student = { name: "Rahul", age: 21 , height:5, color:"white"};
let copyStudent = { ...student };
console.log(copyStudent);

// Rest with Object
let { name, ...details } = student;
console.log(name, details);

