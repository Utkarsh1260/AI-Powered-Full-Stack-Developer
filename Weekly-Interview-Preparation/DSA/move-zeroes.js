const prompt = require("prompt-sync")();

var moveZeroes = function (nums) {
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (nums[j] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
        j++;
    }
};

// Input: array size
let n = Number(prompt("Enter array size: "));

// Input: array elements
let nums = [];

for (let i = 0; i < n; i++) {
    nums[i] = Number(prompt(`Enter element ${i + 1}: `));
}

// Function call
moveZeroes(nums);

// Output
console.log("Array after moving zeroes:", nums);