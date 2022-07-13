
function coinChange(coins, target){
    const min = dfs(coins, target,  new Map(), Infinity)
    return min===Infinity?-1:min
}

function dfs(coins, target, memo){

    if(target===0){
        return 0
    }
    if(target<0){
        return Infinity
    }
    if(memo.has(target)){
        return memo.get(target)
    }
    let minDistance = Infinity
    for(const coin of coins){
        const current = 1+dfs(coins, target-coin,memo)
        minDistance= Math.min(minDistance, current)
    }
    memo.set(target, minDistance)
    return memo.get(target)
}

console.log(coinChange([1,2,5], 11))