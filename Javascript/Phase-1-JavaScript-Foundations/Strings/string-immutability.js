
// 1. Original String
let x = "hello";

console.log("Original String:", x);

// 2. Calling a Method Without Reassignment
x.toUpperCase();

console.log("After toUpperCase():", x);

// 3. Reassigning the Returned String
x = x.toUpperCase();

console.log("After Reassignment:", x);

// 4. Original and New Strings
let namee = "aman";
let upperName = namee.toUpperCase();

console.log("Original Name:", namee);
console.log("Uppercase Name:", upperName);
