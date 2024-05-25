// Quest:1
// case: 1
// input: 
// arr = [10, 20, 20, 30, 20];
// output: 100
// case: 2
// input:
// arr = [10, 20, 10, 40, 40, 35, 70]
// output: 250

// solution:
const freqCounts = (arr) => {
    const freq = {};
    for (let item of arr) {
        if (freq[item]) {
            freq[item]++;
        } else {
            freq[item] = 1;
        }
    }
    return freq;
};

const arr = [10, 20, 20, 30, 20];
const data = freqCounts(arr);
console.log(data);
// Calculate the total sales from pairs of socks
const totalSales = Object.entries(data).reduce((sum, [key, value]) => {
    const pairs = Math.floor(value / 2);
    const sales = pairs * key * 5;
    return sum + sales;
}, 0);

console.log(totalSales); // Output: 100


// Quest:2
// write pattern code for hollow triangle

// Quest:3
// zigzack pattern of string 

// Quest:4

// 121. Best Time to Buy and Sell Stock


