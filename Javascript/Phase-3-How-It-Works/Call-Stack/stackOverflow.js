function loop() {
  loop(); // calls itself forever, never returns
}
loop(); // ❌ RangeError: Maximum call stack size exceeded

// Every recursive function must have a base case that stops the recursion, otherwise → stack overflow.