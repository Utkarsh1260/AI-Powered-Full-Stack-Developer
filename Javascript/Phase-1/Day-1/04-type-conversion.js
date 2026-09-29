// ---------- TYPE CONVERSION ----------

// String → Number
const age = Number("50");
console.log(age);         // 50
console.log(typeof age);  // number

// Number → String
const price = String(100);
console.log(price);        // "100"
console.log(typeof price); // string

// String → Boolean
console.log(Boolean("true")); // true
console.log(Boolean(""));     // false

// Truthy / Falsy
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

// Invalid String → Number
console.log(Number("123abc")); // NaN

// parseInt()
console.log(parseInt("500px")); // 500



// ---------- TYPE COERCION ----------

// JavaScript automatically converts types
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3
console.log(true + 1); // 2