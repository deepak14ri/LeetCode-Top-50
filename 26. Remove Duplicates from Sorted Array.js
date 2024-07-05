/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums) return 0;
    nums.sort((a, b) => a-b);
    let uniqPtr = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[uniqPtr]){
            uniqPtr++;
            nums[uniqPtr] = nums[i];
        }
    }
    return uniqPtr+1;

};