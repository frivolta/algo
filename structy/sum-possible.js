const sumPossible = (amount, numbers, memo={}) => {
    if(amount === 0) return true
    if(amount<0) return false
    if(amount in memo) return memo[amount]
    for(const number of numbers){
        if(number<=amount){
            const isPossible = sumPossible(amount-number, numbers)
            if(isPossible) memo[amount] = true
        }
    }
    memo[amount] = false
    return false
};

console.log(sumPossible(8, [5, 12, 4]));