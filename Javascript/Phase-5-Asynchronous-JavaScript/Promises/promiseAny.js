
const p1 = Promise.reject("Fail 1");

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Success 2!"), 1000);
});

const p3 = Promise.reject("Fail 3");

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log("Winner:", result);
    })
    .catch((error) => {
        console.log("All promises failed:", error.errors);
    });

// Output after approximately 1 second:
// Winner: Success 2!
