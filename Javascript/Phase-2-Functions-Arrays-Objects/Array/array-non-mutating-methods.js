// Non-Mutating Methods (Return New Array)
// These don't change the original — they return a new array or value.


let arr = [1, 2, 3, 4, 5];

// slice() — slice(startIndex, endIndex)
console.log("slice():", arr.slice(1, 4)); // [2, 3, 4]
console.log("Original array:", arr);      // [1, 2, 3, 4, 5]

// concat() — concat(value1, value2, ...)
console.log("concat():", arr.concat([6, 7])); // [1, 2, 3, 4, 5, 6, 7]

// includes() — includes(searchElement, fromIndex)
console.log("includes():", arr.includes(3)); // true

// indexOf() — indexOf(searchElement, fromIndex)
console.log("indexOf():", arr.indexOf(3));   // 2
console.log("indexOf():", arr.indexOf(99));  // -1 (not found)

// join() — join(separator)
console.log("join():", arr.join("-")); // "1-2-3-4-5"

// Original array remains unchanged
console.log("Original array:", arr); // [1, 2, 3, 4, 5]