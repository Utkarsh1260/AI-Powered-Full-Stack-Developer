// String → Number
const ageString = "21";
const age = Number(ageString);

console.log(age);
console.log(typeof age);


// Number → String
const price = 500;
const priceString = String(price);

console.log(priceString);
console.log(typeof priceString);


// Value → Boolean
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false