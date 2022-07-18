let solveKnapsack = function (profits, weights, capacity) {
    const N = profits.length
    const dp = []
    const dfs = (idx, currentCapacity, dp) => {
        if (capacity === 0 || idx > N) {
            return 0
        }
        dp[idx] = dp[idx] || []

        if (dp[idx][currentCapacity]) return dp[idx][currentCapacity]

        let take = 0
        if (currentCapacity - weights[idx] >= 0) {
            take = profits[idx] + dfs(idx, currentCapacity - weights[idx], dp)
        }
        const noTake = dfs(idx + 1, currentCapacity, dp)
        dp[idx][currentCapacity] = Math.max(take, noTake)

        return dp[idx][currentCapacity] = Math.max(take, noTake)
    }

    return dfs(0, capacity, dp);
};

var profits = [15, 20, 50];
var weights = [1, 2, 3];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 5)}`); //80 profit
var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 8)}`); //140 profit