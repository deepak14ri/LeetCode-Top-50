/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const fact = { 0: 1};
    let arr = [];
    for(let i=1;i<=n;i++){
        arr.push(i);
        fact[i] = i*fact[i-1];
    }
    const KthComb = [];
    k--;
    while(arr.length>0){
        const availLen = arr.length-1;
        let factIdx = fact[availLen];
        let swapVal = Math.floor(k/factIdx);
        KthComb.push(arr[swapVal]);
        arr.splice(swapVal, 1);
        const rem = k%factIdx;
        k = k%factIdx;
    }
    return KthComb.join('');
};