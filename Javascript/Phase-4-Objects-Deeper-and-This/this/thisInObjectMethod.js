const user = {
  name: "Rahul",
  greet() {
    console.log("Hi, " + this.name);
  }
};
user.greet(); // Hi, Rahul