const maxProfit = function(k, prices) {
    return dfs(0, k, 0, prices, {})
};

// Holding 1 I have to sell
// Holding 0 I have to buy

const dfs = (i, k, holding,prices, memo)=>{
    if(k<=0 || i>=prices.length){
        return 0
    }
    if(`${i},${k},${holding}` in memo) return memo[`${i},${k},${holding}`]
    const doNothing = dfs(i+1, k, holding, prices, memo)
    let doSomething = null;
    if(holding ===0){
        doSomething = dfs(i+1, k, 1, prices, memo)-prices[i]
    }else{
        doSomething = prices[i]+dfs(i+1, k-1, 0, prices,memo)
    }
    return memo[`${i},${k},${holding}`]=Math.max(doNothing, doSomething)
}
console.log(maxProfit(2,[3,2,6,5,0,3]))