let user = {
    name: "Utkarsh",
    age: 22,
    city: "Jabalpur"
};

// 1. Dot notation
console.log("Dot notation:");
console.log(user.name);
console.log(user.age);

// 2. Showing why bracket notation is needed
let key = "name";

console.log("Dot notation with variable:");
console.log(user.key);

// 3. Bracket notation
console.log("Bracket notation with variable:");
console.log(user[key]);

// 4. Bracket notation with spaces
let student = {
    "full name": "Utkarsh Kushwaha"
};

console.log(student["full name"]);