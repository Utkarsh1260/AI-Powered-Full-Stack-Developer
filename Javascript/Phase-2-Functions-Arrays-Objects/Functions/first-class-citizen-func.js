/* A function can be called first-class-citizen-function if :
1. Store functions in variables.
2. Pass functions as arguments to other functions.
3. Return functions from other functions. */


// 1. Store a function in a variable
const sayHi = function() {
    console.log("Hi!");
};

sayHi(); // Hi!


// 2. Pass a function as an argument
function callTwice(fn) {
    fn();
    fn();
}

callTwice(sayHi);
// Hi!
// Hi!


// 3. Return a function from another function
function makeGreeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}`);
    };
}

const greet = makeGreeter("Hello");

greet("Aman"); // Hello, Aman


// 4. Pass different functions as arguments
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calculate(10, 5, add));      // 15
console.log(calculate(10, 5, multiply)); // 50