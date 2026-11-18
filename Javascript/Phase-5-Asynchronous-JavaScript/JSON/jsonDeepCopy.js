// JSON.parse(JSON.stringify(obj)) ek purana trick hai object ki deep copy banane ka (nested objects bhi copy ho jaate hain). Limitation: functions, undefined, dates theek se copy nahi hote. Simple data ke liye chalta hai.

const original = {
    naam: "Aman",
    address: {
        city: "Indore"
    },
    greet: function () {
        console.log("Hello");
    },
    age: undefined,
    joiningDate: new Date()
};

// Creating a deep copy
const copy = JSON.parse(JSON.stringify(original));

// Modifying the nested object in the copy
copy.address.city = "Bhopal";

console.log("Original:", original);
console.log("Copy:", copy);

// Checking the limitation
console.log(original.address.city); // Indore
console.log(copy.address.city);    // Bhopal

console.log(copy.greet);           // undefined (function removed)
console.log(copy.age);             // undefined (property removed)
console.log(typeof copy.joiningDate); // string (Date converted to string)