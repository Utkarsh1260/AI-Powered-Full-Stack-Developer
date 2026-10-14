let person = {
    name: "Aman",
    age: 25,
    city: "Bhopal"
};

// 1. USING FOR...IN
// Iterates over the object's enumerable property keys.
for (let key in person) {
    console.log(key, ":", person[key]);
}

// 2. USING OBJECT.KEYS() WITH FOREACH
// Iterates over an array of property names.
Object.keys(person).forEach(key => {
    console.log(key, ":", person[key]);
});

// 3. USING OBJECT.ENTRIES() WITH DESTRUCTURING
// Extracts each key-value pair directly.
for (let [key, value] of Object.entries(person)) {
    console.log(key, ":", value);
}