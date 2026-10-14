let person = {
    namee: "Aman",
    age: 25,
    city: "Bhopal"
};

// 1. BASIC OBJECT DESTRUCTURING
// Extract properties into variables using their property names.
let { namee, age } = person;

console.log(namee); // Aman
console.log(age);   // 25


// 2. RENAMING VARIABLES
// Use propertyName: newVariableName to assign a different variable name.
let { name: fullName, age: years } = person;

console.log(fullName); // undefined (name property does not exist)
console.log(years);    // 25


// 3. DEFAULT VALUES
// Use a default value when the property is missing or undefined.
let { country = "India" } = person;

console.log(country); // India

// The default value is not used when the property exists.
let { city: personCity = "Indore" } = person;

console.log(personCity); // Bhopal


// 4. NESTED OBJECT DESTRUCTURING
// Extract properties from an object nested inside another object.
let user = {
    name: "Aman",
    address: {
        city: "Bhopal",
        state: "Madhya Pradesh"
    }
};

// Rename city to userCity to avoid a variable name conflict.
let { address: { city: userCity, state } } = user;

console.log(userCity); // Bhopal
console.log(state);    // Madhya Pradesh


// 5. DESTRUCTURING WITH REST SYNTAX
// Collect the remaining properties into a new object using ...rest.
let student = {
    name: "Priya",
    age: 22,
    course: "B.Tech",
    city: "Jabalpur"
};

let { name: studentName, ...otherDetails } = student;

console.log(studentName); // Priya
console.log(otherDetails);
// { age: 22, course: "B.Tech", city: "Jabalpur" }