let countChange = function(denominations, total) {
    const dfs = (idx, currentTotal, dp)=>{
        if(currentTotal===0){
            return 0
        }
        if(idx>=denominations.length||currentTotal<0){
            return Infinity
        }
        dp[idx]=dp[idx]||[]
        if(dp[idx][currentTotal]) return dp[idx][currentTotal]
        const taking = 1+dfs(idx,currentTotal-denominations[idx],dp)
        const notTaking = dfs(idx+1, currentTotal,dp)
        return dp[idx][currentTotal]=Math.min(taking, notTaking)
    }
    const minChange = dfs(0, total,[])
    return minChange!==Infinity?minChange:-1;
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Number of ways to make change: ---> ${countChange([3, 5], 7)}`);