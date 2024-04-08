/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums) => {
    const result = [];

    const backtrack = (current, remaining) => {
        if (remaining.length === 0) {
            result.push(current.slice()); // Push a shallow copy of the current permutation to the result
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]); // Add the current element to the current permutation
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1)); // Create a new array with the current element removed
            backtrack(current, newRemaining); // Recur with the updated current permutation and remaining elements
            current.pop(); // Backtrack by removing the last element added
        }
    };

    backtrack([], nums);
    return result;
};

var arr = [1,2,3]
console.log(permute(arr));