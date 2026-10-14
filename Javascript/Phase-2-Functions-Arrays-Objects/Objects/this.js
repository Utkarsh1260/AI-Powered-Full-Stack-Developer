let person = {
    name: "Aman",
    greet() {
        console.log("Hello, I am " + this.name);
    }
};

person.greet();   // "Hello, I am Aman"