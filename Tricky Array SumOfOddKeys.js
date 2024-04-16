
const freqCounts = (arr) => {
    const freq = {};
    for(let item of arr){
        if(freq[item]){
            freq[item]++;
        }else{
            freq[item] = 1;
        }
    }
    return freq;
}
const arr = [1, 2, 1, 2, 3, 2, 4]; // 2+3+4 = 9 //ignoring pairs
const data = freqCounts(arr);
const oddKeysValues = Object.fromEntries(Object.entries(data).filter(([key, value]) => value%2 !== 0));
// Object.fromEntries(arr) change [['1': 2], ['2': 3], ['3': 1], ['4': 1] ] to { '1': 2, '2': 3, '3': 1, '4': 1 }
// Object.entries(arr) { '1': 2, '2': 3, '3': 1, '4': 1 } to [['1': 2], ['2': 3], ['3': 1], ['4': 1] ] 

const sumOfOddKeys = Object.keys(oddKeysValues).reduce((acc, sum) => parseInt(acc)+parseInt(sum));
console.log(sumOfOddKeys);