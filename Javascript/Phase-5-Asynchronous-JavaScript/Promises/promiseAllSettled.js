const p1 = Promise.resolve("Pass 1");
const p2 = Promise.reject("Fail 2");
const p3 = Promise.resolve("Pass 3");

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log(results);
    });

// Output:
// [
//   { status: 'fulfilled', value: 'Pass 1' },
//   { status: 'rejected', reason: 'Fail 2' },
//   { status: 'fulfilled', value: 'Pass 3' }
// ]