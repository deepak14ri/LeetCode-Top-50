/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const sym = {
        'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000
    }
    let result = 0;
    for(let i=0;i<s.length;i++){
        let curr = sym[s[i]];
        let next = sym[s[i+1]]
        if(curr<next){
            result += next-curr;
            i++;
        }else{
            result += curr;
        }
    }
    return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToIntII = function(s) {
    const roman_num = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    const roman_parallel = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };
    
    let i = 0;
    let len = s.length;
    let ans = 0;
    while(i<len){
        if(i<len-1 && roman_parallel[s[i]+s[i+1]]){
            ans += roman_parallel[s[i]+s[i+1]];
            i += 2;
        }else{
            ans += roman_num[s[i]];
            i++;
        }
    }
    return ans;
};

console.log(romanToIntII('III'));
console.log(romanToInt('LVIII'));