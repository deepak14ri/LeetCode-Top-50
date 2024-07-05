/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let str = s.split(' ').sort((a, b) => a[a.length - 1] - b[b.length - 1]);
    let res = str.map((word) => word.slice(0, -1)).join(' ');
    return res;
};