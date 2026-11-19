function task1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 completed"), 1000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Task 2 failed"), 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 3 completed"), 3000);
    });
}

// Promise.all()
async function usingPromiseAll() {
    console.log("----- Promise.all() -----");

    try {
        const results = await Promise.all([
            task1(),
            task2(),
            task3()
        ]);

        console.log("Results:", results);
    } catch (error) {
        console.log("Error:", error);
    }
}

// Promise.allSettled()
async function usingPromiseAllSettled() {
    console.log("\n----- Promise.allSettled() -----");

    const results = await Promise.allSettled([
        task1(),
        task2(),
        task3()
    ]);

    console.log("Results:", results);
}

// Run both examples
async function main() {
    await usingPromiseAll();
    await usingPromiseAllSettled();
}

main();