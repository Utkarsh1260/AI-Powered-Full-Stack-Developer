const prompt = require("prompt-sync")();

var removeDuplicates = function (nums) {
    let i = 1;
    let j = 1;

    for (; i < nums.length;) {
        if (nums[i] === nums[i - 1]) {
            i++;
        } else {
            nums[j] = nums[i];
            j++;
            i++;
        }
    }

    return j;
};

let nums = prompt(
    "Enter sorted array values separated by commas: "
);

nums = nums.split(",").map(Number);

let k = removeDuplicates(nums);

console.log("Modified array:", nums);
console.log("Unique count (k):", k);
console.log("Unique elements:", nums.slice(0, k));