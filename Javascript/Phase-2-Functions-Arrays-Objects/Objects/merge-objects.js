const person = {
    name: "Utkarsh",
    age: 22,
    city: "Jabalpur"
};

let merged = Object.assign({}, person, { age: 26, country: "India" }); // {} (empty object) is the target where all the sources object will be copied, you can change to source to any existing object in your code but it can modify your object

console.log(merged);



const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const result = {
    ...obj1,
    ...obj2
};

console.log(result);