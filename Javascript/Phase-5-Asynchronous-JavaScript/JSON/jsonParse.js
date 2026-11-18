
const jsonString = '{"name":"Rahul","age":25,"skills":["JS","React"]}';

const user = JSON.parse(jsonString);

console.log(user);
// { name: 'Rahul', age: 25, skills: [ 'JS', 'React' ] }

console.log(user.name);
// Rahul

console.log(user.skills[0]);
// JS

console.log(typeof user);
// object
