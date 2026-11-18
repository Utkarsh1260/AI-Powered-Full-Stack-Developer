let count = 1;
let intervalId = setInterval(() => {
  console.log("Count: " + count);
  count++;

  if (count > 5) {
    clearInterval(intervalId); // 5 ke baad rok do
    console.log("Interval band ho gaya");
  }
}, 1000);

// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
// Interval band ho gaya