/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const usedInRow = new Array(9).fill(false).map(() => new Array(9).fill(false));
    const usedInCol = new Array(9).fill(false).map(() => new Array(9).fill(false));
    const usedInBox = new Array(9).fill(false).map(() => new Array(9).fill(false));
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== '.') {
          const num = parseInt(board[i][j]);
          usedInRow[i][num - 1] = true;
          usedInCol[j][num - 1] = true;
          const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          usedInBox[boxIndex][num - 1] = true;
        }
      }
    }
  
    function backtrack(row, col) {
      if (col === board.length) {
        row++;
        col = 0;
      }
  
      if (row === board.length) return true; // solved!
  
      if (board[row][col] !== '.') return backtrack(row, col + 1); // skip filled cells
  
      for (let num = 1; num <= 9; num++) {
        const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        if (!usedInRow[row][num - 1] && !usedInCol[col][num - 1] && !usedInBox[boxIndex][num - 1]) {
          usedInRow[row][num - 1] = true;
          usedInCol[col][num - 1] = true;
          usedInBox[boxIndex][num - 1] = true;
          board[row][col] = num.toString();
  
          if (backtrack(row, col + 1)) return true; // successful placement, continue
  
          usedInRow[row][num - 1] = false;
          usedInCol[col][num - 1] = false;
          usedInBox[boxIndex][num - 1] = false;
          board[row][col] = '.';
        }
      }
  
      return false; // no valid number found in this cell
    }
  
    return backtrack(0, 0) ? board : false;
  };
