let countChange = function(denominations, total) {
    const dfs = (idx, currentTotal)=>{
        if(currentTotal===0){
            return 1
        }
        if(idx>=denominations.length||currentTotal<0){
            return 0
        }

        const taking = dfs(idx,currentTotal-denominations[idx])
        const notTaking = dfs(idx+1, currentTotal)
        return taking+notTaking
    }
    return dfs(0, total);
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);