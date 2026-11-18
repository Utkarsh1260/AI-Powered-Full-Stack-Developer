
const original = {
    a: 1,
    b: [2, 3]
};

// Step 1: JavaScript Object → JSON String
const str = JSON.stringify(original);

// Step 2: JSON String → JavaScript Object
const back = JSON.parse(str);

console.log(back);
// { a: 1, b: [ 2, 3 ] }

console.log(typeof str);  // string
console.log(typeof back); // object
