/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows === 1 || numRows >= s.length) {
        return s;
    }

    let idx = 0, d = 1;
    const rows = new Array(numRows).fill().map(() => []);

    for(const char of s){
        rows[idx].push(char);
        if(idx === 0){
            d = 1;
        }else if(idx === numRows - 1){
            d = -1;
        }
        idx += d;
    }

    for(let i=0;i<numRows;i++) {
        rows[i] = rows[i].join('');
    }

    return rows.join('');
};