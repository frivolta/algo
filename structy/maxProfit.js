function maxProfitWithKTransactions(prices, k) {
    return dfs(prices, 0, -Infinity)
}

const dfs = (prices, idx, maxProfit,se)=>{
    if(idx===prices.length-1) return maxProfit

    for(const price of prices) {
        if(price-prices[idx]>maxProfit){
            maxProfit = price-prices[idx]
            se = [prices[idx], price]
        }
    }

    dfs(prices, idx+1, -Infinity )

    return {maxProfit, se}
}
console.log(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90]))