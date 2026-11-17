const user = {
  name: "Rahul",
  greet: () => {
    console.log(this.name); // undefined! (user se nahi liya)
  }
};
user.greet();

// arrow function ke pas khud ka this nhi hota hai vo apne lexical scope se udhar leta hai 