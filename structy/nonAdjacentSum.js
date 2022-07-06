const nonAdjacentSum = (nums) => {
    const sum = bf(nums, 0, {})
    return sum

};


const bf = (nums, idx, memo)=>{
    if(idx in memo) return memo[idx]
    if(idx>=nums.length) return 0

    const takingFirst = nums[idx] + bf(nums, idx+2, memo)
    const notTakingFirst = bf(nums, idx+1, memo)

    memo[idx] = Math.max(takingFirst, notTakingFirst)

    return Math.max(takingFirst, notTakingFirst)
}



const nums = [7, 5, 5, 12];
console.log(nonAdjacentSum(nums)); // -> 16