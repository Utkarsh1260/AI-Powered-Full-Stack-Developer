let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c); // 10 20 30
  }
  inner();
}
outer();


// - `inner` finds `c` in itself.
// - `b` is found in its parent (`outer`).
// - `a` is found in the global scope.

// But the reverse is impossible — `outer` can never access `c`, because `c` lives in a deeper (inner) scope. The chain is one-directional.