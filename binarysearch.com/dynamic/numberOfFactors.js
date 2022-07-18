const CountWays = function(n) {
    const nums = [1,3,4]
    const dfs = (total, dp)=>{
        if(total===0){
            return 1
        }
        if(total<0){
            return 0
        }


        if(total in dp) return dp[total]

        let ways = 0;
        for(const num of nums){
            let way1=0
            if(total-num>=0){
                way1=dfs( total-num, dp)
            }
            ways+=way1
        }
        dp[total]=ways
        return dp[total]
    }
    return dfs(n, {})
};

console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);
console.log(`Number of ways: ---> ${CountWays(6)}`);