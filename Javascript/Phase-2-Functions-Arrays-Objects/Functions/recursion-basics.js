// ==========================================
// 1. FACTORIAL USING RECURSION
// ==========================================

function factorial(n) {
    if (n <= 1) return 1;          // Base case: stop recursion
    return n * factorial(n - 1);   // Recursive case: call itself
}

console.log("Factorial:", factorial(5)); // 120


// ==========================================
// 2. COUNTDOWN USING RECURSION
// ==========================================

function countdown(n) {
    if (n <= 0) {                  // Base case: stop at 0
        console.log("Done!");
        return;
    }

    console.log(n);                // Print current number
    countdown(n - 1);              // Call with a smaller number
}

countdown(5);




// ==========================================
// 3. SUM OF NUMBERS USING RECURSION
// ==========================================

function sum(n) {
    if (n <= 0) return 0;          // Base case: sum of 0 is 0
    return n + sum(n - 1);         // Add n to the smaller sum
}

console.log("Sum:", sum(5)); // 15


// ==========================================
// 4. FIBONACCI USING RECURSION
// ==========================================

function fibonacci(n) {
    if (n <= 1) return n;           // Base cases: 0 and 1
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci:", fibonacci(6)); // 8