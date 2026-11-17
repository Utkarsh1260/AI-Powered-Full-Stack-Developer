
// Variables declared inside a function are only visible inside that function. `var`, `let`, and `const` are all function-scoped when declared inside a function.


function test() {
  var secret = 42;
}
console.log(secret); // ❌ ReferenceError — not visible outside
