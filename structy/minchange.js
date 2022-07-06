const minChange = (amount, coins) => {
    const distance = dfs(amount, coins, 0, Infinity, {})
    return distance
};

const dfs = (amount, coins, distance, minDistance=Infinity, memo={})=>{
    if(amount in memo) return memo[amount]

    if(amount<0) return Infinity

    if(amount === 0){
        return distance
    }

    for(const coin of coins){
            const dist = dfs(amount - coin, coins, distance + 1, minDistance)
            minDistance = Math.min(minDistance, dist)

    }

    memo[amount] = minDistance

    return minDistance
}

console.log(minChange(271, [10, 8, 265, 24]) // -> 5
)