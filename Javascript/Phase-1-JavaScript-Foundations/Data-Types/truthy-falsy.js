// 1. Check whether an empty string is truthy or falsy
console.log(Boolean("")); // false

// 2. Check whether 0 is truthy or falsy
console.log(Boolean(0)); // false

// 3. Check whether [] is truthy or falsy
console.log(Boolean([])); // true

// 4. Print "Valid" if a variable has a value, otherwise "Invalid"
let value = "Hello";

if (value) {
    console.log("Valid");
} else {
    console.log("Invalid");
}