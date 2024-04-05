/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const revX = x < 0 ? parseInt(Math.abs(x).toString().split('').reverse().join(''))*Math.sign(x) : parseInt(x.toString().split('').reverse().join(''));
    if(revX < -Math.pow(2, 31) || revX > Math.pow(2, 31) - 1){
     return 0;
    }else{
     return revX;
    }
 };