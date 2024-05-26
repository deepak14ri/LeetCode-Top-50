/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length
    if(n == 1){
        return 0
    }
    
    let jumps = 0
    let current_end = 0
    let farthest = 0
    
    for(let i=0;i<n-1;i++){
        farthest = Math.max(farthest, i + nums[i])
        if(i == current_end){
            jumps += 1
            current_end = farthest
            if(current_end >= n - 1){
                break
            }
        }
    }
    return jumps
};