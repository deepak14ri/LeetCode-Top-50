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

const hollowTrianglePattern = (row) => {
    for(let i = 0;i<row;i++){
        process.stdout.write('*');
        if(i < 2*row-1){
            process.stdout.write(' '.repeat(2*i-1)+'*');
        }
        console.log();
    }
    for(let j = row;j>=0;j--){
        process.stdout.write('*');
        if(j < 2*row-1){
            process.stdout.write(' '.repeat(2*j-1)+'*');
        }
        console.log();
    }
}

// Quest:3
// zigzack pattern of string 
const convert = (s, numRows) => {
    if(numRows === 1) return s;
    let n = s.length;
    let charsInSection = 2*numRows - 2;
    let res = '';
    for(let row=0;row<numRows;row++){
        let i = row;
        while(i<n){
            res += s[i];
            if(row !=0 && row != numRows-1){
                let charsInBetween = charsInSection - 2*row;
                let secondIndex = i + charsInBetween;
                if(secondIndex < n) res += s[secondIndex];
            }
            i += charsInSection;
        }
    }
    return res;
}


// Quest:4

// 121. Best Time to Buy and Sell Stock

function maxProfit(prices) {
    let l = 0;
    let r = 1;
    let maxProfit = 0;
    while(r < prices.length){
        if(prices[l] < prices[r]){
            let profit = prices[r] - prices[l];
            maxProfit = Math.max(maxProfit, profit);
        }else{
            l = r;
        }
        r += 1
    }
    return maxProfit;
};

// Question 5:

function findLongestMountainSequence(heights) {
    const n = heights.length;
    if (n < 3) return []; // A valid mountain needs at least 3 points

    let longestSequence = [];
    
    let i = 1;
    while (i < n - 1) {
        // Check if heights[i] is a peak
        if (heights[i - 1] < heights[i] && heights[i] > heights[i + 1]) {
            // Find the start of the increasing sequence
            let left = i;
            while (left > 0 && heights[left - 1] < heights[left]) {
                left--;
            }
            
            // Find the end of the decreasing sequence
            let right = i;
            while (right < n - 1 && heights[right] > heights[right + 1]) {
                right++;
            }
            
            // Update the longest_sequence if this one is longer
            const currentSequence = heights.slice(left, right + 1);
            if (currentSequence.length > longestSequence.length) {
                longestSequence = currentSequence;
            }
            
            // Move i to the end of the current mountain
            i = right;
        } else {
            i++;
        }
    }
    return longestSequence;
}

// Sample Input
// let num = Number(prompt())
// let input = String(prompt())
// let arrayFormat = input.split(' ').map(Number)
// console.log(arrayFormat, typeof input, typeof num);
const inputHeights = "2 1 4 7 3 2 5 1";
const heights = inputHeights.split(' ').map(Number);
console.log("heights: ", heights)
// Find the longest mountain sequence
const result = findLongestMountainSequence(heights);
console.log(result.join(' ')); // Expected output: 1 4 7 3 2

// Question 6:

let ar = [1,2,3,4,5,2,3,4];
const remDup = () => {
    let obj = {};
    for(let i=0;i<ar.length;i++){
        if(obj[ar[i]]){
            obj[ar[i]]++;
        }else{
            obj[ar[i]] = 1;
        }
    }
    return obj
}
let res = remDup();
console.log("Remove duplicate values: ", Object.keys(res));
let filterResult = Object.keys(res).filter((key) => res[key] === 1);
console.log("Only unique values: ", filterResult);




import React, { useState, useEffect } from "react";

export default filterTodosTitle = () => {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    if (query) {
      setFilteredTodos(
        todos.filter((todo) =>
          todo.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredTodos([]);
    }
  }, [query, todos]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="type here..."
          style={{ border: "1px solid #ccc" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>
          {filteredTodos.length > 0 && (
            <div>
              {filteredTodos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};


const RegistrationDetails = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value} = e.target;

        setFormData({
            ...formData, 
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted ', formData);
        setFormData({
            username: '',
            email: '',
            password: ''
        });
    }

    return (
        <div className="registration-container">
            <h2>Registration form</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text"
                    placeholder="username"
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    required />
                <label>Email</label>
                <input type="text"
                    placeholder="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange} 
                    required />
                <label>Password</label>
                <input type="text"
                    placeholder="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required />
            </form>
        </div>
    )
}

