/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let digit_map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
    };

    if(!digits) return [];

    let combinations = [];
    const generate_combinations = (index, path) => {
        if(digits.length === index){
                combinations.push(path);
                return;
        }
        for(let letter of digit_map[digits[index]]){
            generate_combinations(index+1, path+letter);
        } 
    }
    generate_combinations(0, '');
    return combinations;
};

console.log(letterCombinations('23'));