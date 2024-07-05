/** JavaScript
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let closestSum = nums[0]+nums[1]+nums[2];
    for(let i=0;i<nums.length-2;i++){
        let j = i+1;
        let k = nums.length-1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            if(sum === target){
                j += 1;
                k -= 1;
            }else if(sum < target){
                j += 1;
            }else{
                k -= 1;
            }
            if(Math.abs(sum-target) < Math.abs(closestSum - target)){
                closestSum = sum;
            }
        }
    }
    return closestSum;
};