let solveKnapsack = function (profits, weights, capacity) {
    // Formula: Math.max(profit[i]+dp[i][c-weigths[i]], profit[i-1][c])
    const dp = new Array(profits.length).fill(0).map(()=>new Array(capacity+1).fill(0))
    for(let i=0;i<profits.length; i++){
        for(let c=1; c<capacity+1;c++){
            let take =0
            let noTake = 0
            if(c-weights[i]>=0){
                take = profits[i]+dp[i][c-weights[i]]
            }
            if(i-1>=0){
                noTake = dp[i-1][c]
            }
            dp[i][c] = Math.max(take, noTake)
        }
    }
    return dp[profits.length-1][capacity]
};

var profits = [15, 20, 50];
var weights = [1, 2, 3];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 5)}`); //80 profit
var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 8)}`); //140 profit