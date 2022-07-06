const validSudoku = (board) => {
    const singleBoardSize =  3

    // Check 3x3 Board
    for(let R=0; R<singleBoardSize; R++){
        const start = Math.floor(3*R)
        const end = start+2;
        // Check board
        for(let r=start; r<=end; r++){
            const currentBoard = []
            for(let c=start; c<=end; c++){
                if(currentBoard.includes(board[r][c]) || currentBoard.includes(board[c][r])){
                    return false
                }
                if(board[r][c] !== 0) currentBoard.push(board[r][c])
                if(board[c][r] !==0) currentBoard.push(board[c][r])
            }
        }
        // ./Check board
    }
    // .Check 3x3 Board

    // Check whole Board
    for(let r=0; r<board.length; r++){
        const currRow = []
        const currCol = []
        for(let c=0; c<board.length; c++){
            if(currRow.includes(board[r][c]) || currCol.includes(board[c][r])){
                return false
            }
            if(board[r][c] !== 0) currRow.push(board[r][c])
            if(board[c][r] !==0) currCol.push(board[c][r])
        }
    }
    // .Check whole Board
    return true
}

const board = [[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]]
console.log(validSudoku(board))