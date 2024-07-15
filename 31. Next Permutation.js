function nextPermutation(nums) {
    let k = nums.length - 2;

    // Find the first decreasing element from the right
    while (k >= 0 && nums[k] >= nums[k + 1]) {
        k--;
    }

    // If no such element found, reverse the array
    if (k === -1) {
        nums.reverse();
        return;
    }

    // Find the smallest element greater than nums[k] from the right
    let l = nums.length - 1;
    while (nums[l] <= nums[k]) {
        l--;
    }

    // Swap nums[k] and nums[l]
    [nums[k], nums[l]] = [nums[l], nums[k]];

    // Reverse the subarray nums[k+1:]
    reverse(nums, k + 1);
}

function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Example usage:
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // Output will be [1, 3, 2] or the next lexicographically greater permutation
