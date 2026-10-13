let arr = [2, 3, 4];

// push() — push(element1, element2, ...)
arr.push(5);
console.log("After push():", arr);

// pop() — pop()
let last = arr.pop();
console.log("After pop():", arr);
console.log("Removed element:", last);

// unshift() — unshift(element1, element2, ...)
arr.unshift(1);
console.log("After unshift():", arr);

// shift() — shift()
let first = arr.shift();
console.log("After shift():", arr);
console.log("Removed element:", first);

// splice() — splice(startIndex, deleteCount, item1, item2, ...)

// Remove elements
let numbers = [10, 20, 30, 40, 50];
let removed = numbers.splice(1, 2);
console.log("After removal:", numbers);
console.log("Removed elements:", removed);

// Add elements — splice(startIndex, 0, item1, item2, ...)
numbers.splice(1, 0, 20, 30);
console.log("After addition:", numbers);

// Replace elements — splice(startIndex, deleteCount, item1, item2, ...)
numbers.splice(1, 2, 25, 35);
console.log("After replacement:", numbers);

// reverse() — reverse()
let values = [1, 2, 3, 4, 5];
values.reverse();
console.log("After reverse():", values);

/* By default, `sort` converts everything to strings and sorts alphabetically.
[10, 1, 5, 100].sort();   // [1, 10, 100, 5]  ← surprising! */

// sort() — sort(compareFunction)
// Ascending order: sort((a, b) => a - b)
let nums = [40, 5, 100, 25, 10];
nums.sort((a, b) => a - b);
console.log("Ascending order:", nums);

// Descending order: sort((a, b) => b - a)
nums.sort((a, b) => b - a);
console.log("Descending order:", nums);
