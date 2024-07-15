/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let length = nums.length;
    let ans = new Array(length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        ans[i] *= leftProduct;
        leftProduct *= nums[i]; //1 1 2 6
    }

    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        ans[i] *= rightProduct;
        rightProduct *= nums[i]; // 24 12 8 6
    }

    return ans;
};

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([0, 0]));       // Output: [0, 0]
console.log(productExceptSelf([0, 4, 5]));    // Output: [20, 0, 0]
