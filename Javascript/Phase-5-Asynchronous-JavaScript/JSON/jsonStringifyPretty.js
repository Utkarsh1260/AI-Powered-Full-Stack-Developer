// JSON.stringify(value, replacer, space);



const user = {
    name: "Rahul",
    age: 25,
    skills: ["JS", "React"],
};

console.log(JSON.stringify(user, null, 2));

// Output:
// {
//   "name": "Rahul",
//   "age": 25,
//   "skills": [
//     "JS",
//     "React"
//   ]
// }
