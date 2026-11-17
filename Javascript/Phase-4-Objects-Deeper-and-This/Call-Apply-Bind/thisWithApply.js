function introduce(city, country) {
    console.log(`Main ${this.name} hoon, ${city}, ${country} se.`);
}

const person1 = {
    name: "Utkarsh"
};

const person2 = {
    name: "Rahul"
};

introduce.apply(person1, ["Jabalpur", "India"]);
// Output: Main Utkarsh hoon, Jabalpur, India se.

introduce.apply(person2, ["Gujarat", "India"]);
// Output: Main Rahul hoon, Gujarat, India se.


// Pehla argument = this ki value.
// baki argument array me