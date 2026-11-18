
const user = {
    name: "Rahul",
    age: 25,
    skills: ["JS", "React"],
};

const jsonString = JSON.stringify(user);

console.log(jsonString);
// {"name":"Rahul","age":25,"skills":["JS","React"]}

console.log(typeof jsonString);
// string
