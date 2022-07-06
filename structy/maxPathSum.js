const maxPathSum = (grid) => {
    const max = dfs(grid, 0, 0, {})
    return max
};

const dfs = (grid, r, c, memo)=>{
    const endR = grid.length-1
    const endC = grid[0].length-1

    if(r<0 || r>endR || c<0 || c>endC) return 0
    if(r===endR && c===endC) return grid[r][c]
    const curr = grid[r][c]
    if(`${r},${c}` in memo) return memo[`${r},${c}`]

    const right = curr+dfs(grid,r,c+1, memo)
    const down = curr+dfs(grid,r+1,c, memo)

    memo[`${r},${c}`] = Math.max(right,down)
    return Math.max(right,down)
}
const grid = [
    [1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 6, 1, 1, 5, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
console.log(maxPathSum(grid));