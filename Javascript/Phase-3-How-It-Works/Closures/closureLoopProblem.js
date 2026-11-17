// Classic Closure + Loop Problem using var

console.log("Using var:");

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output after 1 second:
// 3
// 3
// 3


// Fix using let

console.log("Using let:");

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output after 1 second:
// 0
// 1
// 2