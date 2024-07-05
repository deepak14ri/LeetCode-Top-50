/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target);
    if (Math.max(...nums) < target) return nums.length;

    for(let num of nums){
        if(num > target){
            return nums.indexOf(num);
        }
    }
};

