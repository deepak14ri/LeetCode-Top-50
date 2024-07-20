// ================Map, Filter and forEach Concept===============================

(function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    const result = arr.map((num) => (num % 2 === 0 ? num : null))
                      .filter((num) => num !== null); 
    result.forEach((num) => {
        console.log(num);
        return;
    })
}());

// ================Deep and Shallow Copy Concept===============================

/* In summary:
- Shallow copy: New reference, same memory location, changes affect original.
- Deep copy: New object/array, new memory location, changes don't affect original.
*/

(function main() {
    let orig = [1,2,3];
    // let shallowCopy = orig;
    // shallowCopy.push(4);
    let deepCopy = [...orig];
    deepCopy.push(4);
    console.log('Original Values changes in Shallow Copy: ', orig );
    console.log('Original Values does not change in Deep Copy: ', deepCopy);
}());

// ================Closure Concept===============================

function outer() {
    let x = 5;
    
    function inner(y) {
        let sum = x + y;        
        return sum; 
    }
    x = 3;
    return inner;
}

let ans = outer(); // 'outer' is called, which returns the 'inner' function. 'ans' now holds the 'inner' function
console.log(ans(2)); // 'ans' (which is the 'inner' function) is called with 'y' as 2, so it returns 5 + 2 = 7

// ================Memoize Concept===============================
function square(n){
    return n*n;
}
function memoize(fn){
    return function(...args){
        let cache = {};
        let n = args[0];
        if(n in cache){
            return cache[n];
        }else{
            let result = fn(n);
            return fn(n);
        }
    }
}
console.time();
let res = memoize(square);
console.log(res(5));
console.timeEnd();

console.time();
console.log(res(5));
console.timeEnd();


