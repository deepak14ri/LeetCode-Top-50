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

console.log(romanToInt('LVIII'));