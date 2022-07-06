const countingChange = (amount, coins,i=0,memo={}) => {
    if(amount === 0) return 1
    if(amount<0)return 0

    let totalWays =0
    const coin = coins[i]
    if(`${amount},${coin}` in memo) return memo[`${amount},${coin}`]
    for(let qty = 0;(qty*coin)<=amount; qty++){
        const remainder = amount-(coin*qty)
        totalWays+=countingChange(remainder, coins, i+1,memo)
    }
    memo[`${amount},${coin}`] = totalWays
    return totalWays
};
