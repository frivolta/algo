class Solution {
    solve(matrix, r, c, target) {
        const source = matrix[r][c]

        const queue = [[r,c]]
        const visited = new Set();

        const getPos = (r,c)=>`${r},${c}`
        const isInbound = (r,c)=>r>=0 && r<matrix.length&&c>=0&&c<matrix[0].length

        while(queue.length){
            const [row, col] = queue.shift();
            visited.add(getPos(row,col))

            if(matrix[row][col]===source){
                matrix[row][col]=target
                const limits = [[0,1],[0,-1],[1,0],[-1,0]]
                for(const [r,c] of limits){
                    const [newR, newC] = [row+r, col+c]
                    if(isInbound(newR, newC) && !visited.has(getPos(newR,newC))){
                        queue.push([newR,newC])
                    }
                }
            }
        }
        return matrix
    }
}


const matrix = [
    ["g", "r", "b", "r", "b", "r", "b", "r", "g"]
]
const r = 0
const c = 0
const target = "b"
const solution = new Solution()
console.log(solution.solve(matrix,r,c,target))
