let person = {
    name: "Aman",
    age: 25,
    city: "Bhopal",
    isStudent: true,
    hobbies: ["Chess", "Reading"]
};

console.log(person);



// 2. ACCESSING PROPERTIES
// Dot notation — access a property using its name.
console.log(person.name); 
console.log(person.age);  

// Bracket notation — access a property using a string key.
console.log(person["name"]); 
console.log(person["city"]);

// Bracket notation — access a property using a variable.
let key = "age";

console.log(person[key]); // 25
console.log(person.key);  // undefined (looks for a property named "key")

// Bracket notation — access a key containing spaces.
let user = {
    "first name": "Priya"
};

console.log(user["first name"]); // Priya


// 3. ADDING PROPERTIES
person.country = "India";

// Bracket notation — add a property using a key.
person["email"] = "aman@example.com";

console.log(person);



// 4. UPDATING PROPERTIE
// Assign a new value to an existing property.
person.age = 26;
person["city"] = "Indore";

console.log(person.age);  // 26
console.log(person.city); // Indore



// 5. DELETING PROPERTIES

// The delete operator removes a property from an object.
delete person.hobbies;
delete person["email"];

console.log(person.hobbies); // undefined
console.log(person.email);   // undefined

console.log(person);