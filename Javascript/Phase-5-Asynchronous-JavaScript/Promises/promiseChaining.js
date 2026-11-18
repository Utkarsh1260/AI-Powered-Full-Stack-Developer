function add(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 10);
        }, 1000);
    });
}

add(0)
    .then((result) => {
        console.log(result); // 10
        return add(result);  // Returns a new Promise
    })
    .then((result) => {
        console.log(result); // 20
        return add(result);  // Returns another Promise
    })
    .then((result) => {
        console.log(result); // 30
    });

// Output:
// (After 1 second) 10
// (After 2 seconds) 20
// (After 3 seconds) 30