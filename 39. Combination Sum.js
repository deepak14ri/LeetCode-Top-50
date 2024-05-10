/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const path = [];
    candidates.sort((a, b) => a - b);

    backTrack(candidates, 0, target, path, result);

    return result;
};

const backTrack = (candidates, start, target, path, result) => {
    if(target === 0){
        result.push([...path]);
    }
    if(target < 0){
        return;
    }
    for(let i=start;i<candidates.length;i++){
        path.push(candidates[i]);
        backTrack(candidates, i, target - candidates[i], path, result);
        path.pop();
    }
}