/*
===========================================================
06 — OBJECT METHODS & LOOPING
===========================================================
*/


const person = {

    name: "Aman",
    age: 25,
    city: "Bhopal"

};


// =========================================================
// Object.keys()
// =========================================================

console.log(
    Object.keys(person)
);


// =========================================================
// Object.values()
// =========================================================

console.log(
    Object.values(person)
);


// =========================================================
// Object.entries()
// =========================================================

console.log(
    Object.entries(person)
);


// =========================================================
// Object.entries + forEach
// =========================================================

Object.entries(person).forEach(
    ([key, value]) => {

        console.log(
            `${key}: ${value}`
        );

    }
);


// =========================================================
// for...in
// =========================================================

for (let key in person) {

    console.log(
        key,
        person[key]
    );

}


// =========================================================
// Object.entries + for...of
// =========================================================

for (
    let [key, value]
    of Object.entries(person)
) {

    console.log(key, value);

}


// =========================================================
// Object.assign()
// =========================================================

const merged = Object.assign(

    {},

    person,

    {
        age: 26,
        country: "India"
    }

);

console.log(merged);


// Modern alternative:

const modernMerged = {

    ...person,

    age: 26,
    country: "India"

};

console.log(modernMerged);


// =========================================================
// Object.freeze()
// =========================================================

const frozen = Object.freeze({

    name: "Aman"

});

frozen.name = "Raj";

console.log(frozen);


// =========================================================
// Object.seal()
// =========================================================

const sealed = Object.seal({

    name: "Aman"

});


// Existing property can change.
sealed.name = "Raj";


// New property cannot be added.
sealed.age = 25;

console.log(sealed);


// REMEMBER:
//
// keys()    → keys
// values()  → values
// entries() → key + value
// freeze()  → cannot modify
// seal()    → existing can modify,
//              cannot add/delete