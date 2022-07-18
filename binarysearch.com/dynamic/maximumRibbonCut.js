let countRibbonPieces = function(ribbonLengths, total) {

    const dfs = (idx, currentTotal, dp)=>{
        if(currentTotal===0){
            return 0
        }
        if(currentTotal<0 || idx>=ribbonLengths.length){
            return -Infinity
        }

        dp[idx] = dp[idx]||[]
        if(dp[idx][currentTotal]) return dp[idx][currentTotal]
        const taking = 1+dfs(idx, currentTotal-ribbonLengths[idx],dp)
        const notTaking = dfs(idx+1, currentTotal,dp)

        return dp[idx][currentTotal]= Math.max(taking, notTaking)
    }
    const maxRibbons =  dfs(0, total, []);
    return maxRibbons===-Infinity?-1:maxRibbons
};

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);