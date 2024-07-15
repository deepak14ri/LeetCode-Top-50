/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1, -1];
    let ans = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            ans.push(i)
        }
    }
    if(ans.length === 0) return [-1, -1];
    let last = ans[ans.length-1];
    let first = ans[0];
    return [first, last];
};