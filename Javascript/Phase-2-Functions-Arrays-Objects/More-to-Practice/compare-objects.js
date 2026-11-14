let obj1 = { name: "Rahul", age: 21 };
let obj2 = { name: "Rahul", age: 21 };

let isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);

console.log(isEqual); 