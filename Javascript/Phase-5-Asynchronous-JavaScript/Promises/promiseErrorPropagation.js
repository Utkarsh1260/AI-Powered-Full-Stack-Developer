
function add(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 10);
        }, 1000);
    });
}

add(0)
    .then((result) => {
        console.log("First result:", result); // 10
        throw new Error("Something went wrong in between! 💥");
    })
    .then((result) => {
        // This block will be skipped because the previous block threw an error.
        console.log("This will not execute:", result);
    })
    .then((result) => {
        // This block will also be skipped.
        console.log("This will not execute either.");
    })
    .catch((error) => {
        console.log("Error caught:", error.message);
    });

// Output:
// First result: 10
// Error caught: Something went wrong in between! 💥
