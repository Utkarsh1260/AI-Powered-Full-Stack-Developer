setTimeout(() => console.log("Hello"), 0);
console.log("World");

// Output:
// World
// Hello
// (Haan! 0 ms ke baad bhi "World" pehle aata hai 😲 — iska reason event loop hai)