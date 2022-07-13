class Solution {
    ans = Infinity
    solve(matrix) {
        for(let r=0; r<matrix.length; r++){
            for(let c=0; c<matrix[0].length; c++){
                if(matrix[r][c]===2){
                    console.log('S-> Starting from ',r,c)
                    this.bfs(matrix, r, c)
                    console.log('E-> Found distances ',this.ans)
                }
            }
        }
        return this.ans===Infinity?-1:this.ans
    }

    bfs(matrix, row,column){
        const queue = [[row,column, 0]]
        const visited = new Set();
        const distances = []
        while(queue.length){
            const [r,c,d] = queue.shift()
            visited.add(`${r},${c}`)
            if(matrix[r][c]===3){
                distances.push(d)
            }else{
                const bounds = [[0,1],[0,-1],[1,0],[-1,0]]
                for (const [nR, nC] of bounds){
                    const newR = r+nR
                    const newC = c+nC
                    if(this.isInbound(matrix, newR, newC) && matrix[newR][newC]!==1 && matrix[newR][newC]!==2 && !visited.has(`${newR},${newC}`)){
                        queue.push([newR,newC, d+1])
                    }
                }
            }
        }
        for(const distance of distances){
            this.ans = Math.min(this.ans, distance)
        }
    }

    isInbound(matrix, r,c){
        if(r<matrix.length && r>=0 && c<matrix[0].length && c>=0){
            return true
        }
        return false
    }
}