const minChange = (amount, coins, usedCoins=Infinity, currCoins=0) => {
    if(amount === 0) return currCoins
    if(amount<0) return Infinity
    for(const coin of coins){
           const distance = minChange(amount-coin, coins, usedCoins, currCoins+1)
            usedCoins = Math.min(distance, usedCoins)
    }
    return usedCoins
}

console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible
