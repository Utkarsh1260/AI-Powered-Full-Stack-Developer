// ==========================================
// 1. DEFAULT PARAMETERS
// ==========================================

function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Aman");       // Hello, Aman
greet();             // Hello, Guest
greet(undefined);    // Hello, Guest
greet(null);         // Hello, null


// ==========================================
// 2. MULTIPLE DEFAULT PARAMETERS
// ==========================================

function introduce(name = "Guest", age = 18) {
    console.log(`Name: ${name}, Age: ${age}`);
}

introduce("Aman", 21);  // Name: Aman, Age: 21
introduce("Priya");     // Name: Priya, Age: 18
introduce();            // Name: Guest, Age: 18


// ==========================================
// 3. DEFAULT PARAMETER WITH CALCULATION
// ==========================================

function calculatePrice(price, tax = 18) {
    return price + (price * tax / 100);
}

console.log(calculatePrice(1000));      // 1180
console.log(calculatePrice(1000, 5));   // 1050


// ==========================================
// 4. REST PARAMETERS
// ==========================================

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum());                  // 0


// ==========================================
// 5. REST PARAMETERS WITH ARRAY METHODS
// ==========================================

function findMaximum(...numbers) {
    return Math.max(...numbers);
}

console.log(findMaximum(10, 25, 7, 40)); // 40


// ==========================================
// 6. COMBINING NORMAL AND REST PARAMETERS
// ==========================================

function showStudent(name, ...marks) {
    console.log("Student:", name);
    console.log("Marks:", marks);
}

showStudent("Aman", 85, 90, 78);

// Student: Aman
// Marks: [85, 90, 78]


// ==========================================
// 7. TOO FEW ARGUMENTS
// ==========================================

function add(a, b) {
    return a + b;
}

console.log(add(5)); // NaN (5 + undefined)


// ==========================================
// 8. TOO MANY ARGUMENTS
// ==========================================

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 10, 20)); // 15


// ==========================================
// 9. MISSING ARGUMENT WITH DEFAULT VALUE
// ==========================================

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5));        // 5
console.log(multiply(5, 4));     // 20
console.log(multiply(5, undefined)); // 5


// ==========================================
// 10. REST PARAMETERS COLLECT ALL EXTRA ARGUMENTS
// ==========================================

function displayArguments(first, ...remaining) {
    console.log("First argument:", first);
    console.log("Remaining arguments:", remaining);
}

displayArguments("A", "B", "C", "D");

// First argument: A
// Remaining arguments: ["B", "C", "D"]