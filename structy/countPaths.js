const countPaths = (grid) => {
    if(grid[grid.length-1][grid[0].length-1] === 'X') return 0
    const paths = dfs(grid, 0,0, {})

    return paths
};

const dfs = (grid, r,c, memo)=>{
    const endR = grid.length-1
    const endC = grid[0].length-1

    if(r<0 || r>endR || c<0 || c>endC) return 0
    if(r===endR && c===endC) return 1
    if(grid[r][c]==='X') return 0
    if(`${r},${c}` in memo) return memo[`${r},${c}`]

    const right = dfs(grid, r, c+1, memo)
    const down = dfs(grid, r+1, c, memo)
    memo[`${r},${c}`] = right+down
    return right+down
}

const grid = [
    ["O", "O"],
    ["O", "O"],
];
console.log(countPaths(grid)); // -> 5