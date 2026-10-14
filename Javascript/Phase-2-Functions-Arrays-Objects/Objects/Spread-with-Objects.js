let person = { name: "Aman", age: 25 };

// Copy
let copy = { ...person };

// Combine
let extra = { city: "Bhopal", country: "India" };
let combined = { ...person, ...extra };
// { name: "Aman", age: 25, city: "Bhopal", country: "India" }

// Override
let updated = { ...person, age: 26 };
// { name: "Aman", age: 26 }