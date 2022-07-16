let solveKnapsack = function (profits, weights, capacity) {
    // Number of items:
    // Item Names: [0,1,2,3]
    // Item Profits: [1, 6, 10, 16];
    // Item Weights: [1,2,3,5]

    // Total items
    const N = profits.length

    const ks = (idx, currentCapacity) => {
        if (idx >= N || currentCapacity <= 0) {
            return 0
        }
        let profit1 = 0;
        if(currentCapacity-weights[idx]>=0){
            profit1 = profits[idx]+ks(idx+1, currentCapacity-weights[idx])
        }
        const profit2 = ks(idx+1, currentCapacity)

        return Math.max(profit1, profit2)
    }

    return ks(0,capacity)
};


const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);