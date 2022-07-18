const solveRodCutting = function(lengths, prices, n) {
    const dp = []
    const dfs= (idx, currentN,dp)=>{
        if(idx>=prices.length){
            return 0
        }
        dp[idx]=dp[idx]||[]
        if(dp[idx][currentN]) return dp[idx][currentN]
        let take = 0
        if(currentN-lengths[idx]>=0){
            take =prices[idx]+dfs(idx, currentN-lengths[idx],dp)
        }

        let noTake = dfs(idx+1, currentN, dp)
        dp[idx][currentN] =Math.max(take, noTake)
        return dp[idx][currentN]
    }
    return dfs(0, n,dp)
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`);