class Solution {
    solve(matrix) {
        const lands = []
        for(let r=0; r<matrix.length; r++){
            for(let c=0; c<matrix[0].length; c++){
                if(matrix[r][c]===1){
                    lands.push([r,c])
                }
            }
        }
        for(const [lr, lc] of lands){
            const distance = this.findDistance(matrix,lr,lc)
            console.log(distance)
        }
    }
    isInbound = (board, r, c) => {
        if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
            return true
        }
        return false
    }

    findDistance(matrix, r,c){
        const queue = [[r,c,0]]
        const visited = new Set()
        visited.add(`${r},${c}`)
        while(queue.length){
            const [r,c,distance] = queue.shift()
            if(matrix[r][c]===0 && !visited.has(`${r},${c}`)){
                return distance-1
            }
            const deltas = [[1,0],[-1,0],[0,1],[0,-1]]
            for(const [deltaR, deltaC] of deltas){
                const newR=r+deltaR
                const newC = c+deltaC
                if(!visited.has(`${newR},${newC}` && this.isInbound(matrix, newR,newC))){
                    visited.add(`${newR},${newC}`)
                    queue.push([newR, newC, distance+1])
                }
            }
        }
        return 0
    }
}