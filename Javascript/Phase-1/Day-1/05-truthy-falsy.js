const values = [
    false,
    0,
    "",
    null,
    undefined,
    NaN
];

values.forEach(value => {
    console.log(value, Boolean(value));
});



// false
// 0
// ""
// null
// undefined
// NaN


console.log(Boolean("hello")); // true
console.log(Boolean("0"));     // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true


