
// A block is anything inside `{ }` (if, for, while, or a plain block). `let` and `const` are block-scoped. `var` is NOT — `var` ignores blocks.


{
  let a = 1;
  var b = 2;
}
console.log(b); // 2  (var leaked out of the block)
console.log(a); // ❌ ReferenceError (let stayed inside)
