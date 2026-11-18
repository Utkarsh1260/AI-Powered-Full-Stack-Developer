// Getters & Setters se hum method ko property ki tarah use karte hain (bina `()` lagaye).


class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get fullName() {           // getter
    return this.first + " " + this.last;
  }
  set fullName(value) {      // setter
    const parts = value.split(" ");
    this.first = parts[0];
    this.last  = parts[1];
  }
}

const p = new Person("Rahul", "Sharma");
console.log(p.fullName);    // Rahul Sharma (bina () ke!)
p.fullName = "Priya Verma"; // setter chala
console.log(p.first);       // Priya