/*
===========================================================
02 — ARRAYS
===========================================================

Array = ordered collection of values.

Important:
JavaScript arrays start from index 0.
*/


// Creating an array

let fruits = [
    "Apple",
    "Banana",
    "Mango"
];


// Accessing elements

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// Invalid index

console.log(fruits[3]);
// undefined


// Last element

console.log(fruits[fruits.length - 1]);


// Modern way

console.log(fruits.at(-1));


// =========================================================
// LENGTH
// =========================================================

let numbers = [10, 20, 30, 40];

console.log(numbers.length);

console.log(numbers.length - 1);
// Last index


// =========================================================
// PUSH
// =========================================================
// Adds element to the end.

numbers.push(50);

console.log(numbers);


// =========================================================
// POP
// =========================================================
// Removes element from the end.

let removedLast = numbers.pop();

console.log(numbers);
console.log(removedLast);


// =========================================================
// UNSHIFT
// =========================================================
// Adds element at beginning.

numbers.unshift(5);

console.log(numbers);


// =========================================================
// SHIFT
// =========================================================
// Removes element from beginning.

let removedFirst = numbers.shift();

console.log(numbers);
console.log(removedFirst);


// =========================================================
// SPLICE
// =========================================================

// splice(start, deleteCount, items...)

let arr = [1, 2, 3, 4, 5];


// Remove

arr.splice(1, 2);

console.log(arr);


// Insert

let arr2 = [1, 2, 5];

arr2.splice(2, 0, 3, 4);

console.log(arr2);


// Replace

let arr3 = [1, 2, 99, 4];

arr3.splice(2, 1, 3);

console.log(arr3);


// =========================================================
// REVERSE
// =========================================================

let reverseArray = [1, 2, 3, 4];

reverseArray.reverse();

console.log(reverseArray);


// =========================================================
// SORT
// =========================================================

let values = [10, 1, 5, 100];


// WRONG for numeric sorting:

console.log(values.sort());


// Correct ascending:

console.log(
    values.sort((a, b) => a - b)
);


// Correct descending:

console.log(
    values.sort((a, b) => b - a)
);


// =========================================================
// SLICE VS SPLICE
// =========================================================

// slice DOES NOT change original.

let original = [1, 2, 3, 4, 5];

let sliced = original.slice(1, 4);

console.log(sliced);
console.log(original);


// splice DOES change original.

let original2 = [1, 2, 3, 4, 5];

let spliced = original2.splice(1, 2);

console.log(spliced);
console.log(original2);


// =========================================================
// OTHER METHODS
// =========================================================

let data = [1, 2, 3, 4, 5];

console.log(data.concat([6, 7]));

console.log(data.includes(3));

console.log(data.indexOf(3));

console.log(data.indexOf(99));

console.log(data.join("-"));