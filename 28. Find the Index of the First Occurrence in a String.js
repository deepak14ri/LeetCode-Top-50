/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const needleLen = needle.length;
    if(haystack === needle) return 0;
    for(let i=0;i<=haystack.length-needleLen;i++){
        if(haystack.substring(i, needleLen+i) === needle){
            return i;
        }
    }
    return -1;
};