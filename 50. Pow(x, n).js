/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var binaryPow = function(x, n) {
    if (n === 0) return 1; // Base case: x^0 = 1
    if (n === 1) return x; // Base case: x^1 = x
    
    let result = binaryPow(x, Math.floor(n / 2));
    result *= result; // Square the result
    
    // If n is odd, multiply by x
    if (n % 2 !== 0) {
        result *= x;
    }
    
    return result;
};

const myPow = (x, n) => {
    if (n < 0) {
        x = 1 / x; // For negative exponent, invert x
        n = -n;    // Make exponent positive
    }
    return binaryPow(x, n);
};
