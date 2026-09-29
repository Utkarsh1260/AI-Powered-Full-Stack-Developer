/*
===========================================================
04 — DESTRUCTURING, SPREAD & REST
===========================================================

Destructuring → extract
Spread        → expand
Rest          → collect
*/


// =========================================================
// ARRAY DESTRUCTURING
// =========================================================

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a, b, c);


// Skip value

const [first, , third] = [1, 2, 3];

console.log(first, third);


// Default value

const [x = 10, y = 20] = [5];

console.log(x, y);


// Swap

let left = 1;
let right = 2;

[left, right] = [right, left];

console.log(left, right);


// =========================================================
// OBJECT DESTRUCTURING
// =========================================================

const person = {

    name: "Aman",
    age: 25,
    city: "Bhopal"

};

const { name, age } = person;

console.log(name, age);


// Rename

const {
    name: fullName,
    age: years
} = person;

console.log(fullName, years);


// Default

const {
    country = "India"
} = person;

console.log(country);


// Nested

const user = {

    name: "Aman",

    address: {
        city: "Bhopal"
    }

};

const {
    address: { city }
} = user;

console.log(city);


// =========================================================
// SPREAD WITH ARRAY
// =========================================================

const nums = [1, 2, 3];

const newNums = [0, ...nums, 4];

console.log(newNums);


// Copy

const copy = [...nums];

console.log(copy);


// Combine

const combined = [
    ...[1, 2],
    ...[3, 4]
];

console.log(combined);


// Spread into function

console.log(
    Math.max(...[5, 3, 9, 1])
);


// =========================================================
// REST
// =========================================================

function sum(...numbers) {

    return numbers.reduce(
        (total, number) => total + number,
        0
    );

}

console.log(sum(1, 2, 3, 4));


// =========================================================
// OBJECT SPREAD
// =========================================================

const person1 = {

    name: "Aman",
    age: 25

};


// Copy

const personCopy = {
    ...person1
};

console.log(personCopy);


// Combine

const extra = {

    city: "Bhopal",
    country: "India"

};

const combinedPerson = {

    ...person1,
    ...extra

};

console.log(combinedPerson);


// Override

const updatedPerson = {

    ...person1,
    age: 26

};

console.log(updatedPerson);