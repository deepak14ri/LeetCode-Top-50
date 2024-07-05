/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    words.sort();
    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const results = [];

    // Iterate through the string
    for (let i = 0; i <= s.length - totalLength; i++) {
        const subString = s.substring(i, i + totalLength);
        
        // Split the substring into chunks of wordLength
        const chunks = [];
        for (let j = 0; j < subString.length; j += wordLength) {
            chunks.push(subString.substring(j, j + wordLength));
        }
        chunks.sort();

        // If the sorted chunks match the sorted words array, add the index to results
        if (chunks.join('') === words.join('')) {
            results.push(i);
        }
    }
    
    return results;
};

// console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));
// Output: [6, 9, 12]
