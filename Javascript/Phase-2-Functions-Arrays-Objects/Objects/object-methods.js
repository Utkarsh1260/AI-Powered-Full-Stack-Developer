let calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(5, 3));  // 15
console.log(calculator.divide(10, 2));   // 5


// 2. CREATING METHODS USING SHORTHAND SYNTAX

let calculator2 = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    }
};

console.log(calculator2.add(8, 2));       // 10
console.log(calculator2.subtract(8, 2));  // 6
console.log(calculator2.multiply(8, 2));  // 16
console.log(calculator2.divide(8, 2));    // 4