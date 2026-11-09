let students = [
    { name: "Utkarsh", age: 22 },
    { name: "Rahul", age: 20 },
    { name: "Aman", age: 24 },
    { name: "Harsh", age: 21 }
];

students.sort((a,b)=> a.age - b.age);

console.log(students);