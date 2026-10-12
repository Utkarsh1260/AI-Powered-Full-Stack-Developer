
let s = "Hello, World!";

// 1. Length
console.log("Length:", s.length);

// 2. Change Case
console.log("Uppercase:", s.toUpperCase());
console.log("Lowercase:", s.toLowerCase());

// 3. Search Methods
console.log("Index of World:", s.indexOf("World"));
console.log("Includes Hello:", s.includes("Hello"));

// 4. Extract Substrings
console.log("Slice:", s.slice(0, 5));
console.log("Substring:", s.substring(7, 12));

// 5. Replace Text
console.log("Replace:", s.replace("World", "JS"));

// 6. Split String
console.log("Split:", s.split(", "));

// 7. Remove Whitespace
console.log("Trim:", "   hi   ".trim());

// 8. Repeat String
console.log("Repeat:", "abc".repeat(3));

// 9. Check Beginning and Ending
console.log("Starts With Hello:", s.startsWith("Hello"));
console.log("Ends With !:", s.endsWith("!"));

// 10. Access Characters
console.log("charAt(0):", s.charAt(0));
console.log("s[0]:", s[0]);
