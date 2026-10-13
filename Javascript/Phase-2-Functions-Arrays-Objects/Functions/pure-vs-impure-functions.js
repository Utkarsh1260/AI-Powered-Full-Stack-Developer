// ==========================================
// 1. PURE FUNCTION
// ==========================================

// Takes two numbers and returns their sum.
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same inputs, same output)


// ==========================================
// 2. IMPURE FUNCTION: MODIFIES AN OUTER VARIABLE
// ==========================================

// Declare a variable outside the function.
let total = 0;

function addToTotal(n) {
    total += n; // Changes the outer variable.
    return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 (same input, different output)


// ==========================================
// 3. IMPURE FUNCTION: USES RANDOMNESS
// ==========================================

function generateNumber() {
    return Math.random(); // Result may vary on each call.
}

console.log(generateNumber());
console.log(generateNumber());


// ==========================================
// 4. IMPURE FUNCTION: MODIFIES AN ARRAY
// ==========================================

function addItem(items, item) {
    items.push(item); // Modifies the original array.
    return items;
}

let cart = ["Laptop"];

addItem(cart, "Mouse");

console.log(cart); // ["Laptop", "Mouse"]


// ==========================================
// 5. PURE ALTERNATIVE: RETURNS A NEW ARRAY
// ==========================================

function addItemPure(items, item) {
    return [...items, item]; // Creates a new array.
}

let newCart = addItemPure(cart, "Keyboard");

console.log(cart);    // ["Laptop", "Mouse"]
console.log(newCart); // ["Laptop", "Mouse", "Keyboard"]