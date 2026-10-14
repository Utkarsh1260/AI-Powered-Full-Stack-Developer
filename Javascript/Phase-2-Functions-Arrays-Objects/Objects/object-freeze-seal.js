// 1. DEMONSTRATING OBJECT.FREEZE()
// Object.freeze() prevents adding, deleting, or modifying existing properties.

let frozenPerson = {
    name: "Aman",
    age: 25
};

Object.freeze(frozenPerson);

// Attempting to modify an existing property.
frozenPerson.name = "Raj";

// Attempting to add a new property.
frozenPerson.city = "Bhopal";

// Attempting to delete an existing property.
delete frozenPerson.age;

console.log("Frozen Object:", frozenPerson);
// Frozen Object: { name: "Aman", age: 25 }


// 2. DEMONSTRATING OBJECT.SEAL()
// Object.seal() allows modifying existing properties but prevents adding or deleting properties.

let sealedPerson = {
    name: "Aman",
    age: 25
};

Object.seal(sealedPerson);

// Modifying an existing property.
sealedPerson.name = "Raj";

// Attempting to add a new property.
sealedPerson.city = "Bhopal";

// Attempting to delete an existing property.
delete sealedPerson.age;

console.log("Sealed Object:", sealedPerson);
// Sealed Object: { name: "Raj", age: 25 }


// 3. CHECKING OBJECT STATUS
// Object.isFrozen() checks whether an object is frozen.
// Object.isSealed() checks whether an object is sealed.

console.log("Is frozenPerson frozen?", Object.isFrozen(frozenPerson)); // true
console.log("Is sealedPerson sealed?", Object.isSealed(sealedPerson)); // true