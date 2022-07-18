const canPartition = function(nums, sum) {
    const totalSum = nums.reduce((s, n)=>s+n)
    // Sum from total is less then sum that can be reached
    if(totalSum<sum) return false
    // Sum is already equal to subset sum
    if(totalSum===sum) return true
    // Create dp and fill 0s column with true
    const dp = new Array(nums.length).fill(false).map(()=>new Array(sum+1).fill(false)).slice()
    for(let r=0; r<=nums.length; r++){
        dp[r][0] = true
    }


    for(let r = 1; r< nums.length;r++){
        for(let c=1; c<=sum; c++){
            //Rules: dp[r-1][c-r] || dp[r-1][c]
            if(dp[r-1][c]){
                dp[r][c]=dp[r-1][c]
            }else if(c>=sum[r]){
                dp[r][c] = dp[r - 1][c - nums[i]];
            }
        }
    }
    return dp[nums.length-1][sum]
};



console.log(canPartition([1,2,3,4], 6)) //t
console.log(canPartition([1,2,7,1,5], 10)) //t
console.log(canPartition([1,3,4,8], 6)) //f
