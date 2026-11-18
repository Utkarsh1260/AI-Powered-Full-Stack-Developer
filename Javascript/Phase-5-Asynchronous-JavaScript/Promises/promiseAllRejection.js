
const p1 = Promise.resolve("Chai");
const p2 = Promise.reject("Samosa khatam!");
const p3 = Promise.resolve("Biscuit");

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log("Fail:", error);
    });

// Output:
// Fail: Samosa khatam!
