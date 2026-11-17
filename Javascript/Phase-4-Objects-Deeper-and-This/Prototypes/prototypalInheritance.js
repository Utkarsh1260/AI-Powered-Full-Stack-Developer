const animal = {
    introduce() {
        console.log(`${this.name} is a ${this.type}.`);
    }
};

// Creating child object using prototypal inheritance
const dog = Object.create(animal);

dog.name = "Tommy";
dog.type = "Dog";

// Calling inherited method
dog.introduce();
// Output: Tommy is a Dog.

// Checking prototype relationship
console.log(Object.getPrototypeOf(dog) === animal);
// Output: true