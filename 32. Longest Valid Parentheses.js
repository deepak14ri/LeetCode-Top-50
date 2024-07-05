/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [-1];
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length > 0) {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            } else {
                stack.push(i);
            }
        }
    }
    return maxLen;
}

console.log(longestValidParentheses('(()()'));