/*
===========================================================
05 — OBJECTS
===========================================================

Object = collection of key-value pairs.
*/


// =========================================================
// CREATE OBJECT
// =========================================================

const person = {

    name: "Aman",
    age: 25,
    city: "Bhopal",
    isStudent: true

};

console.log(person);


// =========================================================
// DOT NOTATION
// =========================================================

console.log(person.name);


// =========================================================
// BRACKET NOTATION
// =========================================================

console.log(person["name"]);


// Dynamic key

const key = "age";

console.log(person[key]);


// IMPORTANT

console.log(person.key);

// Looks for property literally named "key"


// =========================================================
// ADD PROPERTY
// =========================================================

person.country = "India";


// =========================================================
// UPDATE PROPERTY
// =========================================================

person.age = 26;


// =========================================================
// DELETE PROPERTY
// =========================================================

delete person.city;

console.log(person);


// =========================================================
// METHODS
// =========================================================

const calculator = {

    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    }

};

console.log(calculator.add(5, 3));

console.log(calculator.subtract(10, 4));


// =========================================================
// THIS
// =========================================================

const user = {

    name: "Aman",

    greet() {

        console.log(
            "Hello, I am " + this.name
        );

    }

};

user.greet();


// =========================================================
// NESTED OBJECT
// =========================================================

const student = {

    name: "Aman",

    address: {

        city: "Bhopal",
        state: "MP",
        pincode: 462001

    },

    hobbies: [
        "Reading",
        "Coding"
    ]

};

console.log(student.address.city);

console.log(student.hobbies[0]);


// =========================================================
// ARRAY OF OBJECTS
// =========================================================

const users = [

    {
        name: "Aman",
        age: 25
    },

    {
        name: "Priya",
        age: 30
    },

    {
        name: "Raj",
        age: 22
    }

];

console.log(users[0].name);

console.log(
    users.map(user => user.name)
);

console.log(
    users.filter(user => user.age >= 25)
);