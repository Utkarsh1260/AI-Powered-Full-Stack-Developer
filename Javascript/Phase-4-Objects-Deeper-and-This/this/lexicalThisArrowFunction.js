const user = {
  name: "Rahul",
  hobbies: ["coding", "gaming"],
  show() {
    this.hobbies.forEach((hobby) => {
      // arrow ne 'this' ko show() se udhaar liya (lexical scope)
      console.log(this.name + " likes " + hobby);
    });
  }
};
user.show();
// Rahul likes coding
// Rahul likes gaming