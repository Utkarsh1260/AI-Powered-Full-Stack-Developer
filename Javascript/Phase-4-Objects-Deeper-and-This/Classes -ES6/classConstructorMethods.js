//  Class ke saath new keyword aata hai. Jab new MyClass() chalta hai toh JS 4 cheezein karta hai: (1) ek naya khaali object banta hai, (2) uska __proto__ class ke prototype par set hota hai, (3) constructor chalta hai jisme this = wahi naya object, (4) wo object automatically return ho jaata hai.


class Person {
  // new chalne par yahi automatically call hota hai
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // instance method → automatically prototype par jaata hai
  greet() {
    console.log("Hi, main " + this.name);
  }
}

const p = new Person("Rahul", 25);
p.greet(); // Hi, main Rahul