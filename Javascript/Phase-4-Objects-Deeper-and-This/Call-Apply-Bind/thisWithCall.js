function introduce(city, country) {
    console.log(`Main ${this.name} hoon, ${city}, ${country} se.`);
}

const person1 = {
    name: "Utkarsh"
};

const person2 = {
    name: "Rahul"
};

introduce.call(person1, "Jabalpur", "India");
// Output: Main Utkarsh hoon, Jabalpur, India se.

introduce.call(person2, "Gujrat", "India");
// Output: Main Rahul hoon, Gujrat, India se.


// Pehla argument = this ki value. Baaki arguments normal comma-separated.