### 📌 Folder Overview

This folder contains **basic JavaScript programs** demonstrating data types, the `typeof` operator, type conversion, type coercion, and truthy vs falsy values. It covers primitive and non-primitive data types, the behavior of `typeof` with different values, explicit type conversion using `Number()`, `String()`, and `Boolean()`, and implicit type coercion during operations. It also includes practical examples of JavaScript Boolean evaluation to understand how different values behave in conditional expressions.

---

## 📌 JavaScript Truthy vs Falsy Values

### ❌ Falsy Values vs ✅ Truthy Values

| Falsy Value | `Boolean()` Output | Truthy Value | `Boolean()` Output |
|---|---|---|---|
| `false` | `false` | `true` | `true` |
| `0` | `false` | `1` | `true` |
| `-0` | `false` | `-1` | `true` |
| `0n` | `false` | `42` | `true` |
| `""` | `false` | `"hello"` | `true` |
| `null` | `false` | `"0"` | `true` |
| `undefined` | `false` | `"false"` | `true` |
| `NaN` | `false` | `[]` | `true` |
| — | — | `{}` | `true` |
| — | — | `function() {}` | `true` |

### 💻 JavaScript Program

```javascript
console.log(Boolean(false));       // false
console.log(Boolean(0));           // false
console.log(Boolean(-0));          // false
console.log(Boolean(0n));          // false
console.log(Boolean(""));          // false
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false

console.log(Boolean(true));        // true
console.log(Boolean(1));           // true
console.log(Boolean(-1));          // true
console.log(Boolean("hello"));     // true
console.log(Boolean("0"));         // true
console.log(Boolean("false"));     // true
console.log(Boolean([]));          // true
console.log(Boolean({}));          // true
console.log(Boolean(function() {})); // true
```

### 💡 Remember

**Falsy values:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

**Truthy values:** Everything else, including empty arrays `[]`, empty objects `{}`, and non-empty strings such as `"0"` and `"false"`.

---

### 📌 Programs

| S.No. | Program / Project Question | File Name |
| ----: | -------------------------- | --------- |
| 1 | Write a JavaScript program to demonstrate all seven primitive data types (string, number, boolean, null, undefined, symbol, and bigint) and the non-primitive object type. Declare variables with appropriate values, use typeof to identify their types, and display the results using console.log(). Also, demonstrate the difference between null and undefined | `javascript-data-types.js` |
| 2 | Write a JavaScript program to demonstrate the typeof operator. Check and display the types of strings, numbers, booleans, undefined, null, objects, arrays, and functions using console.log(). Observe the special behavior of typeof null, which returns "object", and explain why arrays also return "object" while functions return "function" | `typeof-operator.js` |
| 3 | Write a JavaScript program to demonstrate the difference between explicit type conversion and implicit type coercion. Use Number(), String(), and Boolean() to convert values manually, and demonstrate automatic type coercion using arithmetic operators such as +, -, and * with strings, numbers, booleans, null, and undefined. Display the results and their data types using console.log(). | `type-conversion-vs-coercion.js` |
