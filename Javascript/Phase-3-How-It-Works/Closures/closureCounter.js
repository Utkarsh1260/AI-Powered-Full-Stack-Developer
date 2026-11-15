function counter() {
  let count = 0;            // (1) local variable
  return function () {      // (2) inner function is returned
    count++;
    return count;
  };
}

const inc = counter();      // (3) counter() runs and finishes
console.log(inc()); // 1    // (4)
console.log(inc()); // 2    // (5)
console.log(inc()); // 3    // (6)