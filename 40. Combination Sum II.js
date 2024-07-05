/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
    let result = [];
    let path = [];
    candidates.sort((a, b) => (a - b));

    backTrack(candidates, 0, path, result, target);

    return result;
};

const backTrack = (candidates, start, path, result, target) => {
    if(target === 0){
        result.push([...path]);
    }
    if(target < 0){
        return;
    }
    for(let i=start;i<candidates.length;i++){
        if(i > start && candidates[i] === candidates[i-1]) {
            continue;
        }
        path.push(candidates[i])
        backTrack(candidates, i+1, path, result, target-candidates[i]);
        path.pop();
    }
}