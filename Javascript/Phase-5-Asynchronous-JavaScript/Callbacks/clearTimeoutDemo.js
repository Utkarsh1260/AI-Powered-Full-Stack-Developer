let timerId = setTimeout(() => {
    console.log("Timer completed!"); // it will never print
}, 3000);

console.log("Timer started...");

clearTimeout(timerId);

console.log("Timer cancelled!");