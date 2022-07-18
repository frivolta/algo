const solveRodCutting = function(lengths, prices, n) {
    // base checks
    if (n <= 0 || prices.length === 0 || prices.length != lengths.length) return 0;

    const lengthCount = lengths.length;
    const dp = Array(lengthCount)
        .fill(0)
        .map(() => Array(n + 1).fill(0));

    // process all rod lengths for all prices
    for (let i = 0; i < lengthCount; i++) {
        for (let len = 1; len <= n; len++) {
            let p1 = 0,
                p2 = 0;
            if (lengths[i] <= len) p1 = prices[i] + dp[i][len - lengths[i]];
            if (i > 0) p2 = dp[i - 1][len];
            dp[i][len] = Math.max(p1, p2);
        }
    }

    // maximum price will be at the bottom-right corner.
    return dp[lengthCount - 1][n];
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`);