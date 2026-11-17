function introduce(city, country) {
    console.log(`Main ${this.name} hoon, ${city}, ${country} se.`);
}

const person1 = {
    name: "Utkarsh"
};

const person2 = {
    name: "Rahul"
};

const boundFn1 = introduce.bind(person1);
boundFn1("Jabalpur", "India");
// Output: Main Utkarsh hoon, Jabalpur, India se.

const boundFn2 = introduce.bind(person2);
boundFn2("Indore", "India");
// Output: Main Rahul hoon, Indore, India se.


// bind() permanently sets this and returns a new function.
// Arguments are passed later when the returned function is called.