const myPromise = new Promise((resolve, reject) => {
    console.log("Promise executor function started...");

    let taskSuccessful = true;

    if (taskSuccessful) {
        resolve("Task completed successfully! 🎉");
    } else {
        reject("Something went wrong! 😢");
    }

    console.log("Promise executor function finished.");
});

console.log("Promise created!");

myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Output:
// Promise executor function started...
// Promise executor function finished.
// Promise created!
// Success: Task completed successfully! 🎉