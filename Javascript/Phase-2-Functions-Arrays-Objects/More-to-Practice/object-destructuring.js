let user = {
    name: "Utkarsh",
    age: 22,
    city: "Jabalpur"
};

let {name,age,city}=user;
// Unlike array destructuring, object destructuring matches variables with property names, not positions.

console.log(name);
console.log(age);
console.log(city);