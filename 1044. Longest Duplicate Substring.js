/**
 * @param {string} s
 * @return {string}
 */
function longestDupSubstring(s) {
    let ans = '',j = 1, n = s.length;
     for(let i = 0; i < n; i++){
        let longest = s.slice(i,i+j);
        let temp = s.slice(i+1,);
         while(temp.includes(longest)){
             ans = longest;
             j += 1;
             longest = s.slice(i,i+j);
         }
     }
     return ans;
 };