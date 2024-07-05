/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    let numIndices = {};
    for(let i in nums){
        let num = nums[i];
        let complement = target - num;
        if(numIndices[complement]){
            return [numIndices[complement], i];
        }
        numIndices[num] = i;
    }
    return null;
};

const nums = [2, 7, 11, 15];
const target = 22;
console.log(twoSum(nums, target)); // Output: [0, 1]
