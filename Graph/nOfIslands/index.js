const minimumIsland = (grid) => {
    const islandSizes = []
    const visited = new Set();
    for(let r=0; r<grid.length; r++){
        for(let c=0; c<grid[0].length; c++){
            islandSizes.push(explore(grid, r, c, visited, 0))
        }
    }
    console.log(islandSizes)
};

function explore(grid, r,c,visited,){
    if(r<0 || r>grid.length-1 || c<0||c>grid[0].length-1) return 0
    if(visited.has(`${r},${c}`)) return 0
    if(grid[r][c]!=="L") return 0
    visited.add(`${r},${c}`)
    let currSize =1
    currSize+=explore(grid,r+1, c, visited, currSize)
    currSize+=explore(grid, r-1, c, visited, currSize)
    currSize+=explore(grid, r, c+1, visited, currSize)
    currSize+=explore(grid, r, c-1, visited, currSize)
    return currSize
}



const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid));