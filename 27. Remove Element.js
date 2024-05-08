/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(!nums) return 0;
    let uniqPtr = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[uniqPtr] = nums[i];
            uniqPtr += 1;
        }
    }
    return uniqPtr;
};