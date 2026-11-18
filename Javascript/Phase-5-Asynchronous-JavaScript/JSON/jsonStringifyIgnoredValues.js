
const obj = {
    naam: "Aman",
    greet: function () {}, // Function will be skipped
    age: undefined         // Undefined will also be skipped
};

console.log(JSON.stringify(obj));

// Output:
// {"naam":"Aman"}
