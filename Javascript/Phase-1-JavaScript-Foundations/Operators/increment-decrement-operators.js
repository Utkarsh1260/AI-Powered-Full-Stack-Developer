let x = 5;

// 1. Post-increment
console.log("Post-increment (x++):", x++);
console.log("After post-increment:", x);

// 2. Pre-increment
console.log("Pre-increment (++x):", ++x);
console.log("After pre-increment:", x);

// 3. Post-decrement
console.log("Post-decrement (x--):", x--);
console.log("After post-decrement:", x);

// 4. Pre-decrement
console.log("Pre-decrement (--x):", --x);
console.log("After pre-decrement:", x);


// ==========================================
// Difference Between Pre and Post
// ==========================================

let a = 5;

let b = a++;  // Assign first, increment afterward
let c = ++a;  // Increment first, assign afterward

console.log("\nOriginal variable a:", a);
console.log("b (a++):", b);
console.log("c (++a):", c);
