const animal = {
    eats: true,

    walk() {
        console.log("Animal is walking");
    }
};

// Creating dog object with animal as its prototype
const dog = Object.create(animal);

// Adding an own property
dog.barks = true;

// Accessing own property
console.log(dog.barks);
// Output: true

// Accessing inherited property
console.log(dog.eats);
// Output: true

// Calling inherited method
dog.walk();
// Output: Animal is walking

// Checking prototype relationship
console.log(Object.getPrototypeOf(dog) === animal);
// Output: true