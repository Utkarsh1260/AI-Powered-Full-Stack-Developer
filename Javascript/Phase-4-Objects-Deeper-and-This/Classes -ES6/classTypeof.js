class Person {
  constructor(name) { this.name = name; }
  greet() { return "Hi " + this.name; }
}
console.log(typeof Person); // "function" (class nahi, function!)

console.log(typeof Person.prototype.greet);   // "function"
// matlab greet method Person.prototype par pada hai — purane tareeke jaise

const p = new Person("Rahul");
console.log(p.__proto__ === Person.prototype); // true