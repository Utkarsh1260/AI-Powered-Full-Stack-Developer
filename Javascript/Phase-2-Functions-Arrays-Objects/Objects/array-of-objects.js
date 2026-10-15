let students = [
    { name: "Aman", age: 21, city: "Bhopal" },
    { name: "Priya", age: 22, city: "Indore" },
    { name: "Rahul", age: 20, city: "Jabalpur" }
];


for (let student of students) {
    for (let [key, value] of Object.entries(student)) {
        console.log(key, ":", value);
    }

    console.log();
}