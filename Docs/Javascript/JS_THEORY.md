# JavaScript Theory – Notes

## Table of Contents

| Section | Content |
|---|---|
| 1 | Array Methods |
| 2 | Truthy and Falsy values |

---

## 1. Array Methods

| Method | Purpose | What It Returns |
|---|---|---|
| `map()` | Transform every element | New array of the same length |
| `filter()` | Select elements that satisfy a condition | New array |
| `reduce()` | Combine elements into one result, such as a sum or object | Accumulated result (any type) |
| `find()` | Find the first element satisfying a condition | Element or `undefined` |
| `some()` | Check whether at least one element satisfies a condition | `true` or `false` |
| `every()` | Check whether all elements satisfy a condition | `true` or `false` |



## 2. 📌 JavaScript Truthy vs Falsy Values

### ❌2.1 Falsy Values vs ✅ Truthy Values

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

### 2.2 💻 JavaScript Program

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