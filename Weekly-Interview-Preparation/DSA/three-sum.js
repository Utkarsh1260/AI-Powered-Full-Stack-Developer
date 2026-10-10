
const prompt = require("prompt-sync")();

var threeSum = function (nums) {
    let n2 = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate first numbers
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                n2.push([nums[i], nums[j], nums[k]]);

                j++;
                k--;

                // Skip duplicate second numbers
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }

                // Skip duplicate third numbers
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return n2;
};

// Take input from the user
let nums = prompt("Enter integers separated by commas: ")
    .split(",")
    .map(Number);

console.log(threeSum(nums));
