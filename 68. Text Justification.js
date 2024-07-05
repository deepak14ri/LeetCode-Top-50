/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [];
    let curr = [];
    let num_of_letters = 0;
    // let wordLen = words.reduce((acc, word) => acc + word.length, 0);
    for(let word of words){
        if(curr.length+word.length+num_of_letters > maxWidth){
            for(let i = 0; i < maxWidth - num_of_letters; i++){
                curr[i%(curr.length - 1 || 1)] += ' ';
            }
            res.push(curr.join(''));
            curr = [];
            num_of_letters = 0;
        }
        curr.push(word);
        num_of_letters += word.length;
    }
    let lastLine = curr.join(' ');
    while(lastLine.length < maxWidth) lastLine += ' ';
    res.push(lastLine);

    return res;
};