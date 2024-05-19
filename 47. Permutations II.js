/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = []

    const backTrack = (arr, temp) => {
        if(arr.length === 0){
            result.push([...temp]);
            return;
        }
        const seen = new Set();
        for(let i=0;i<arr.length;i++){
            if(seen.has(arr[i])) continue;
            seen.add(arr[i]);
            const next = arr.slice();
            next.splice(i, 1);
            temp.push(arr[i]);
            backTrack(next, temp);
            temp.pop();
        }
    }
    backTrack(nums, []);

    return result;
};

console.log(permuteUnique([1,2,3]))