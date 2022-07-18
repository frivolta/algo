let canPartition = function(num) {
    return recursive(0, num, 0, 0, [])
};

const recursive = (idx, num, s1, s2, dp)=>{
    if(idx === num.length){
        return Math.abs(s1-s2)
    }

    dp[idx] = dp[idx]||[]
    if(dp[idx][s1]) return dp[idx][s1]

    const take = recursive(idx+1, num, s1+num[idx], s2,dp)
    const notake = recursive(idx+1, num, s1, s2+num[idx], dp)
    return dp[idx][s1]=Math.min(take, notake)
}


console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);