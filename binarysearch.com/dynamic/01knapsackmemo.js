let solveKnapsack = function (profits, weights, capacity) {
    // Number of items:
    // Item Names: [0,1,2,3]
    // Item Profits: [1, 6, 10, 16];
    // Item Weights: [1,2,3,5]

    // Total items
    const N = profits.length
    const ks = (idx, currentCapacity, dp) => {
        if (idx >= N || currentCapacity <= 0) {
            return 0
        }
        dp[idx] = dp[idx] || [];
        if (typeof dp[idx][currentCapacity] !== 'undefined') {
            return dp[idx][currentCapacity];
        }


        if(dp[idx][currentCapacity]){
            return dp[idx][currentCapacity]
        }
        let profit1 = 0;
        if(currentCapacity-weights[idx]>=0){
            profit1 = profits[idx]+ks(idx+1, currentCapacity-weights[idx], dp)
        }
        const profit2 = ks(idx+1, currentCapacity, dp)

        return dp[idx][currentCapacity]= Math.max(profit1, profit2)
    }

    return ks(0,capacity, [])
};


const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);