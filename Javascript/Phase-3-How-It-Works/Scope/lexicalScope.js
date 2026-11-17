// Lexical means "based on where the code is physically written", not where or how it's called. A function's scope is decided by its location in the source code at the time you write it — not at runtime.


function outer() {
  let name = "Sara";
  function inner() {
    console.log(name); // inner can "see" outer's variables — because of where it's written
  }
  inner();
}
outer(); // "Sara"


// inner is written inside outer, so it has access to outer's variables. This physical nesting is "lexical scoping".

