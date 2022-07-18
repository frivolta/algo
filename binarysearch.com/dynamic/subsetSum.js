const canPartition = function(nums, sum) {
    const totalSum = nums.reduce((s, n)=>s+n)
    // Sum from total is less then sum that can be reached
    if(totalSum<sum) return false
    // Sum is already equal to subset sum
    if(totalSum===sum) return true

    const dp = new Array(nums.length+1).fill(false).map(()=>new Array(sum+1).fill(null)).slice()

    return dfs(-1,0,nums, sum, dp)
};

const dfs = (idx, currentSum, nums, expected, dp)=>{
    if(idx>=nums.length) return false
    if(currentSum===expected) return true
    if(dp[idx+1][currentSum]) return dp[idx+1][currentSum]
    let taking = false
    if(idx!==-1){
        taking = dfs(idx+1, currentSum+nums[idx], nums, expected,dp)
    }
    const notTaking = dfs(idx+1, currentSum, nums, expected,dp)
    dp[idx+1][currentSum] = taking || notTaking
    return dp[idx+1][currentSum]
}

console.log(canPartition([1,2,3,4], 6)) //t
console.log(canPartition([1,2,7,1,5], 10)) //t
console.log(canPartition([1,3,4,8], 6)) //f
