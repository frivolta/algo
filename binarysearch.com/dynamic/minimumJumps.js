const countMinJumps = function(jumps) {
    const dfs = (idx) =>{
        if(idx===jumps.length-1){
            return 0
        }
        if(idx>jumps.length-1){
            return Infinity
        }

        let minJumps = Infinity

        for(let jump = 1; jump<=jumps[idx]; jump++){
            const take = 1+dfs(idx+jump)
            minJumps = Math.min(minJumps, take)
        }

        return minJumps
    }
    return dfs(0)
};

console.log(`Minimum jumps needed: ---> ${countMinJumps([2, 1, 1, 1, 4])}`);
console.log(`Minimum jumps needed: ---> ${countMinJumps([1, 1, 3, 6, 9, 3, 0, 1, 3])}`);