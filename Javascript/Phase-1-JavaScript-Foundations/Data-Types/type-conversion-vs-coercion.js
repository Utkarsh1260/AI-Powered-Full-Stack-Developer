// 1. Explicit Type Conversion
console.log("========== Explicit Conversion ==========");

let str = "42";
let num = Number(str);

console.log("String to Number:", num);
console.log("Type:", typeof num);

let n = 100;
let s = String(n);

console.log("\nNumber to String:", s);
console.log("Type:", typeof s);

let val = "hello";
let b = Boolean(val);

console.log("\nString to Boolean:", b);
console.log("Type:", typeof b);


// 2. Implicit Type Coercion
console.log("\n========== Implicit Coercion ==========");

console.log('"5" + 3 =', "5" + 3);
console.log('"5" - 3 =', "5" - 3);
console.log('"5" * "2" =', "5" * "2");

console.log("true + 1 =", true + 1);
console.log("false + 1 =", false + 1);
console.log("null + 1 =", null + 1);
console.log("undefined + 1 =", undefined + 1);


// 3. Understanding the + Operator
console.log("\n========== The + Operator ==========");

console.log('"10" + 5 =', "10" + 5);
console.log('"10" - 5 =', "10" - 5);
console.log('"10" * 5 =', "10" * 5);
console.log('"10" / 5 =', "10" / 5);


// 4. Truthy and Falsy Values
console.log("\n========== Boolean Conversion ==========");

console.log('Boolean("hello") =', Boolean("hello"));
console.log('Boolean("") =', Boolean(""));
console.log("Boolean(0) =", Boolean(0));
console.log("Boolean(1) =", Boolean(1));
console.log("Boolean(null) =", Boolean(null));
console.log("Boolean(undefined) =", Boolean(undefined));
