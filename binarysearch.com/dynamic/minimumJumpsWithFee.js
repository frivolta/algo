const findMinFee = function(fee) {
    const dfs = (idx, totalFee)=>{
        if(idx===fee.length){
            return totalFee
        }
        if(idx>fee.length){
            return Infinity
        }

        const one = dfs(idx+1, totalFee+fee[idx])
        const two = dfs(idx+2, totalFee+fee[idx])
        const three = dfs(idx+3, totalFee+fee[idx])

        return Math.min(one,two,three)
    }
    return dfs(0, 0);
};

console.log(`Minimum fee needed: ---> ${findMinFee([1, 2, 5, 2, 1, 2])}`);
console.log(`Minimum fee needed: ---> ${findMinFee([2, 3, 4, 5])}`);
