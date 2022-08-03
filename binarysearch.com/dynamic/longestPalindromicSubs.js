let findLPSLength = function(st) {
    const dfs = (start, end, dp)=>{
        if(start>end){
            return 0
        }
        if(start ===end){
            return 1
        }

        dp[start] = dp[start]||[]
        if(dp[start][end]) return dp[start][end]
        if(st[start]===st[end]){
            dp[start][end] =2+dfs(start+1, end-1,dp)
            return dp[start][end]
        }
        const one = dfs(start+1, end, dp)
        const two = dfs(start,end-1, dp)
        return dp[start][end] = Math.max(one,two)
    }
    return dfs(0, st.length-1, [])
}

console.log("Length of LPS ---> " + findLPSLength("abdbca"));
console.log("Length of LPS ---> " + findLPSLength("cddpd"));
console.log("Length of LPS ---> " + findLPSLength("pqr"));