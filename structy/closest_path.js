const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set();
    const queue = [[startRow, startCol,0]]
    let pathLength = 0;
    while(queue.length){
        const [row, col, path] = queue.shift()
        const value = grid[row][col]
        visited.add(`${row},${col}`)
        if(value === "C") return path

        if(isInsideAndValid( row+1, col)) {
            queue.push([row + 1, col, path+1])
        }
        if(isInsideAndValid( row-1, col)) {
            queue.push([row - 1, col, path+1])
        }
        if(isInsideAndValid( row, col-1)) {
            queue.push([row, col - 1, path+1])
        }
        if(isInsideAndValid( row, col+1)) {
            queue.push([row, col + 1, path+1])
        }
    }

    function isInsideAndValid(r,c){
        if(r<0 || r>grid.length || c<0||c>grid[0].length-1){
            return false
        }
        if(grid[r][c]==="X"){
            return false
        }
        if(visited.has(`${r},${c}`)){
            return false
        }
        return true
    }

    return pathLength
};



const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'C', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['C', 'O', 'O', 'O', 'O'],
];

console.log(closestCarrot(grid, 1, 2))