/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output = [];

    const generate = (A=[], left = 0, right = 0) => {
        if(A.length === 2*n) {
            output.push(A.join(''));
            return;
        }
        if(left < n){
            A.push('(');
            generate(A, left+1, right);
            A.pop();
        }
        if(right < left){
            A.push(')');
            generate(A, left, right+1);
            A.pop();
        }
    }
    generate();
    return output;
};