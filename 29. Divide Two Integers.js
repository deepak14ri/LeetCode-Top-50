/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    const value = parseInt(dividend/divisor);
    if(value < - Math.pow(2, 31)-1 || value >= Math.pow(2, 31)){
        return value-1;
    }else{
        return value;
    }
};

// 2147483647