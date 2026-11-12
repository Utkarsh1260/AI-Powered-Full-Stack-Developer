let student = {
    name: "Utkarsh",
    age: 22,
    city: "Jabalpur",

    wish: function(){
        console.log("Hello ",this.name);
        console.log("your age is ",this.age);
        console.log("you live in ",this.city);
    }
}

student.wish();