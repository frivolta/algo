class Solution {
    solve(matrix) {
        let island = null
        let visited = null

        // Somehow break doesn't stop parent loop
        let stop = false
        for (let r = 0; r < matrix.length; r++) {
            if (stop) {
                break
            }
            for (let c = 0; c < matrix[0].length; c++) {
                const vis = new Set()
                const possibleIsland = this.dfs(matrix, r, c, [], vis);
                if (possibleIsland.length > 0) {
                    island = possibleIsland
                    visited = vis
                    stop = true
                    break
                }
            }
        }
        const bridge = this.bfs(island, matrix)
        console.log(bridge)
    }
    bfs(initialCoords, matrix){
        const queue = []
        const visited = new Set()
        for (const [r,c] of initialCoords){
            queue.push([r,c,0])
            visited.add(`${r},${c}`)
        }
        while(queue.length){
            const [r,c,distance]=queue.shift();
            if(matrix[r][c]==='1' && !visited.has(`${r},${c}`)){
                return distance-1
            }
            const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            for(const delta of deltas){
                const [deltaR, deltaC] = delta;
                const neighborRow = r + deltaR;
                const neighborCol = c + deltaC;
                const neighborPos = neighborRow + ',' + neighborCol;
                if(this.isInbound(matrix, neighborRow, neighborCol)){
                    visited.add(neighborPos)
                    queue.push([neighborRow, neighborCol, distance + 1]);
                }
            }
        }
        return Infinity
    }

    isInbound = (board, r, c) => {
        if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
            return true
        }
        return false
    }

    dfs(matrix, r, c, coords, visited) {
        const pos = `${r},${c}`
        if (!this.isInbound(matrix, r, c) || visited.has(pos) || matrix[r][c] === 0) {
            return coords
        }
        visited.add(pos)
        coords.push([r, c])
        this.dfs(matrix, r + 1, c, coords, visited)
        this.dfs(matrix, r - 1, c, coords, visited)
        this.dfs(matrix, r, c + 1, coords, visited)
        this.dfs(matrix, r, c - 1, coords, visited)
        return coords
    }
}

const matrix = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
]

const solution = new Solution()
console.log(solution.solve(matrix))