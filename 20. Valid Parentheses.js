/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stack.push(s[i]);
        } else {
            if(stack.length === 0 || !isMatching(stack.pop(), s[i])){
                return false;
            }
        }
    }
    return stack.length === 0;
};

var isMatching = (opening, closing) => {
    return (opening === '(' && closing === ')') || (opening === '{' && closing === '}') || (opening === '[' && closing === ']');
}
