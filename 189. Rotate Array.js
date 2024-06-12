/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    
    const reverse = (arr, start, end) => {
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++;
            end--;
        }
    }
    ans = reverse(nums, 0, nums.length-1);
    ans = reverse(nums, 0, k-1);
    ans = reverse(nums, k, nums.length-1);

    return nums;
};

//Input: [1,2,3,4,5,6,7]
//Output: [5,6,7,1,2,3,4]