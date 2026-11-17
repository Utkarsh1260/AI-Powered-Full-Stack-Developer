//function declaration
sayHi(); // ✅ "Hi" — works
function sayHi() {
  console.log("Hi");
}


// Function expression → follows the variable's hoisting rules. The variable is hoisted, but the function is not assigned until that line runs:
sayBye(); // ❌ TypeError: sayBye is not a function
var sayBye = function () {
  console.log("Bye");
};



// declarations are hoisted with their body; expressions are hoisted only as a variable.