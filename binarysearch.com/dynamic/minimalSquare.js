
const isInbound = (matrix, r,c)=>{
    if(r<0 || r>matrix.length-1 || c<0||c>matrix[0].length){
        return false
    }
    return true
}
const maximalSquare = function(matrix) {
    const cache = {}
    const dfs = (r,c)=>{
        if(`${r},${c}` in cache) return cache[`${r},${c}`]
        if(isInbound(matrix, r,c) && matrix[r][c] === "1"){
            const right = dfs(r, c+1)
            const down = dfs(r+1, c)
            const diag = dfs(r+1,c+1)
            cache[`${r},${c}`] = 1+Math.min(right,down,diag)
            return cache[`${r},${c}`]

        }
        return 0
    }
    let squares = 0
    for(let r=0; r<matrix.length;r++){
        for(let c=0; c<matrix[0].length; c++){
            if(matrix[r][c]==="1"){
                const square = dfs(r,c)
                console.log(square)
                squares = Math.max(square, squares)
            }
        }
    }
    return squares**2
};