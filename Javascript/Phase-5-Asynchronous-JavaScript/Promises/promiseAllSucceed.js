
const p1 = Promise.resolve("Chai");
const p2 = Promise.resolve("Samosa");
const p3 = Promise.resolve("Biscuit");

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log("Something failed:", error);
    });

// Output:
// [ 'Chai', 'Samosa', 'Biscuit' ]
