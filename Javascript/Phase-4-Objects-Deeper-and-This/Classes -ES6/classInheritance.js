// - `extends` → ek class ko doosri se inherit karwata hai.
// - `super(name)` → parent ke constructor ko call karta hai.

class Animal {
  constructor(name) { this.name = name; }
  eat() { console.log(this.name + " kha raha hai"); }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);       // parent ka constructor call
    this.breed = breed;
  }
  bark() { console.log(this.name + " bhonk raha hai"); }
}

const d = new Dog("Tommy", "Labrador");
d.eat();  // Tommy kha raha hai (Animal se inherited)
d.bark(); // Tommy bhonk raha hai (Dog ka apna)