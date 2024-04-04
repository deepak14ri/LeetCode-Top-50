/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2];
    nums.sort((a, b) => a - b);
    const n = nums.length;

    if(n%2 === 0){
        let mid = (nums[Math.floor(n/2)-1]+nums[Math.floor(n/2)])/2;
        return mid.toFixed(5);
    }else{
        let mid = nums[Math.floor(n/2)];
        return mid.toFixed(5);
    }

};