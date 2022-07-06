class Solution {
    solve(board) {
        const visited = new Set()
        for(let r=0; r<board.length; r++){
            for(let c=0;c<board[0].length;c++){
                if(board[r][c]===1 && !visited.has(`${r},${c}`)){
                    const coordinates = this.findCoordinates(board, r,c, new Set(), visited)
                    const isOnBorder = this.coordinatesAreOnBorder(board, coordinates)
                    if(!isOnBorder){
                        for(const [r,c] of coordinates){
                            board[r][c]=0
                        }
                    }
                }
            }
        }
        return board
    }

    isIsland(board, coordinates){
        if(coordinates.size<=1) return false

    }
    coordinatesAreOnBorder(board, coordinates){
        const coords = [...Array.from(coordinates)]
        for(const [r,c] of coords){
            if(r===0 || c===0 || r===board.length-1 || c===board[0].length-1){
                return true
            }
        }
        return false
    }

    isInbound = (r,c)=>{
        if(r>=0 && r<board.length && c>=0 && c<board[0].length){
            return true
        }
        return false
    }
    findCoordinates(board, r,c, coordinates, visited){
        const pos = `${r},${c}`
        if(!this.isInbound(r,c) || visited.has(pos)){
            return false
        }
        visited.add(pos)
        if(board[r][c] === 1) {
            coordinates.add([r,c])
            this.findCoordinates(board, r + 1, c, coordinates, visited)
            this.findCoordinates(board, r - 1, c, coordinates, visited)
            this.findCoordinates(board, r, c + 1, coordinates, visited)
            this.findCoordinates(board, r, c - 1, coordinates, visited)
        }
        return coordinates
    }
}
const board = [
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
]
const output =[
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

const solution = new Solution()
console.log(solution.solve(board))