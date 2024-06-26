/** JavaScript
 * Finds all unique triplets in the array which sum up to zero.
 * @param {number[]} nums - The array of integers.
 * @return {number[][]} - Array of unique triplets.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [];
    if(nums.length<3) return results;
    nums = nums.sort((a, b) => a - b);
    let target = 0;
    for(let i=0;i<nums.length-2;i++){
        if(nums[i]>target) break;
        if(i>0 && nums[i] === nums[i-1]) continue;
        let j = i+1;
        let k = nums.length - 1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            if(sum === target){
                results.push([nums[i], nums[j], nums[k]])
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;
                j++;
                k--;
            }else if(sum<target){
                j++;
            }else{
                k--;
            }
        }
    }
    return results;
};

// Example
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]
