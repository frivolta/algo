const countSubsets = function (num, sum) {

    return recursive(0, num, sum, [])
};
const recursive = (idx, num, sum, dp) => {
    if (idx > num.length || sum < 0) {
        return 0
    }
    if (sum === 0) {
        return 1
    }
    dp[idx] = dp[idx] || []
    if (dp[idx][sum]) return dp[idx][sum]

    return dp[idx][sum] = recursive(idx + 1, num, sum - num[idx], dp) + recursive(idx + 1, num, sum, dp)


}

console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);