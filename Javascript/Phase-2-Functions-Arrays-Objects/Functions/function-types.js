// 1. Function Declaration
// Function declarations are hoisted (you can call them before they're written) 
function greet(name) {
    console.log("Hello, " + name);
}

greet("Aman");


// 2. Function Expression
// Function expressions are not hoisted
const add = function(a, b) {
    return a + b;
};

console.log("Sum:", add(10, 20));


// 3. Anonymous Function
setTimeout(function() {
    console.log("This is an anonymous function.");
}, 1000);


// 4. Arrow Function
const multiply = (a, b) => a * b;

console.log("Product:", multiply(5, 4));


// 5. Arrow Function with a Single Parameter
const square = num => num * num;

console.log("Square:", square(6));


// 6. Arrow Function with No Parameters
const sayHi = () => console.log("Hi!");

sayHi();


// 7. Arrow Function with Multiple Statements
const calculate = (a, b) => {
    const sum = a + b;
    const difference = a - b;

    console.log("Sum:", sum);
    console.log("Difference:", difference);
};

calculate(15, 5);