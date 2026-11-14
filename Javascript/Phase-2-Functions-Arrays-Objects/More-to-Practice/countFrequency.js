let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let result = fruits.reduce((acc, fruit) => {

    if (acc[fruit]) {
        acc[fruit]++;
    } else {
        acc[fruit] = 1;
    }

    return acc;

}, {});

console.log(result);