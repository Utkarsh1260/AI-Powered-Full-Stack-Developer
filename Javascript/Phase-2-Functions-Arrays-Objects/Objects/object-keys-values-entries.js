let person = {
    name: "Aman",
    age: 25,
    city: "Bhopal"
};

// 1. GETTING OBJECT KEYS
// Object.keys() returns an array of property names.
console.log("Object Keys:", Object.keys(person));
// Object Keys: ["name", "age", "city"]


// 2. GETTING OBJECT VALUES
// Object.values() returns an array of property values.
console.log("Object Values:", Object.values(person));
// Object Values: ["Aman", 25, "Bhopal"]


// 3. GETTING OBJECT ENTRIES
// Object.entries() returns an array of [key, value] pairs.
console.log("Object Entries:", Object.entries(person));
// Object Entries: [["name", "Aman"], ["age", 25], ["city", "Bhopal"]]