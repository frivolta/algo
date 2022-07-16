const change = function(amount, coins) {
    const N = coins.length
    const cc = (idx, currentAmount, memo)=>{
        if(currentAmount === 0)
            return 1

        if(currentAmount<0){
            return 0
        }
        if(`${currentAmount},${idx}` in memo) return memo[`${currentAmount},${idx}`]
        let noTake = null;
        if(idx>=1) noTake = cc(idx-1, currentAmount, memo)
        const take=cc(idx, currentAmount-coins[idx], memo)

        return memo[`${currentAmount},${idx}`] = noTake+take
    }

    return cc(N-1, amount, {})
};