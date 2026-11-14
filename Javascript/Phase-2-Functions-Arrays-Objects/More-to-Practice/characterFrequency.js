let str = "banana";

let result = {};

for (let char of str) {
    if (result[char]) {
        result[char]++;
    } else {
        result[char] = 1;
    }
}

console.log(result);