let user = {
    name: "Utkarsh",
    age: 22,
    city: "Jabalpur"
};

let { name: studentName, age: studentAge, city: studentCity } = user;

console.log(studentName);
console.log(studentAge);
console.log(studentCity);