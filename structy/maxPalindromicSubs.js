const maxPalinSubsequence = (str) => {
    return dfs(str.split(''), 0, 0)
};

const dfs = (arr)=>{
    if(arr.length===0) return 0
    if(arr.length===1) return 1

    const first = arr[0]
    const last  = arr[arr.length-1]

    if(first === last){
        return 2 + dfs(arr.slice(1, arr.length-2))

    }else{
        const l = 1+dfs(arr.slice(1, arr.length-1))
        const r = 1+dfs(arr.slice(0, arr.length-2))
        return Math.max(l, r)
    }
}

console.log(maxPalinSubsequence("luwxult")); // -> 5
