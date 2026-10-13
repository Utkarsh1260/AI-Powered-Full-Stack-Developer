
// 1. Basic Example
let age = 20;

let statuss = age >= 18 ? "Adult" : "Minor";

console.log("Status:", statuss);


// 2. Checking Eligibility
let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);


// 3. Checking Even or Odd
let number = 7;

let type = number % 2 === 0 ? "Even" : "Odd";

console.log("Number Type:", type);


// 4. Setting a Default Value
let username = "";

let displayName = username ? username : "Guest";

console.log("Display Name:", displayName);


// 5. Find the Greater Number
let a = 15;
let b = 25;

let greater = a > b ? a : b;

console.log("Greater Number:", greater); // 25