const prompt = require("prompt-sync")();

var rotate = function(nums, k) {
    if (nums.length === 0) return;

    k = k % nums.length;
    let temp = [];

    // Storing k places elements in temp
    for (let i = nums.length - k; i < nums.length; i++) {
        temp.push(nums[i]);
    }

    // Shifting elements to the end
    for (let i = (nums.length - k) - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    // Place the rotated elements at the start
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
};

// Input array size
let n = Number(prompt("Enter array size: "));

// Input array elements
let nums = [];

for (let i = 0; i < n; i++) {
    nums[i] = Number(prompt(`Enter element ${i + 1}: `));
}

// Input rotation steps
let k = Number(prompt("Enter number of rotation steps (k): "));

// Rotate the array
rotate(nums, k);

// Display result
console.log("Rotated array:", nums);