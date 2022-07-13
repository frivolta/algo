class Solution {
    solve(n, memo = {}){
        if(n in memo){
            return memo[n]
        }
        if(n===0) return 1
        if(n<0) return 0
        // Watch out for high number integer modulo
        memo[n] = (this.solve(n-1, memo)+this.solve(n-2,memo))%(10**9+7)
        return memo[n]
    }
}

// Dp, i is equal to i-1, i-2
class Solution {
    solve(n, memo = {}){
        // Init an array from 0 to n, filling with 0
        const dp = new Array(n+1).fill(0).slice()
        dp[0]=1
        dp[1]=1
        for(let i=2; i<dp.length;i++){
            dp[i]=dp[i-1]%(10**9+7)+dp[i-2]%(10**9+7)
        }
        return dp[dp.length-1]%(10**9+7)
    }
}