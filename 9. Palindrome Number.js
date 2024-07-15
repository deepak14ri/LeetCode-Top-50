/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const revStr = (num) => {
        let rev = 0;
        while(num>0){
            rev = rev*10 + num%10;
            num = Math.floor(num/10);
        }
        return rev*Math.sign(x);
    }
    if(x<0){
        return false;
    }
    return revStr(x) === x;
};