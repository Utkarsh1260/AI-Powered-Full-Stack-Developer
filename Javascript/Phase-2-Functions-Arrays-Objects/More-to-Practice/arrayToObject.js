const arr = ["name", "Anubhav", "age", 24];

let result = {};

for (let i = 0; i < arr.length; i += 2) {
    result[arr[i]] = arr[i + 1];
}

console.log(result);