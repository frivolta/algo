//Top Down
const _mapIdxToDuplicates = (nums) => {
    nums = nums.sort((a,b)=>a-b)
    const m = new Map()
    for (let i = 0; i < nums[nums.length - 1] + 1; i++) {
        m.set(i, 0)
    }
    for (const num of nums) {
        m.set(num, m.get(num) + 1)
    }
    return m
}
const _removeDuplicates = (nums) => {
    const arr = []
    let max = -Infinity
    for (const num of nums) {
        if (!arr.includes(num)) {
            arr.push(num)
            max = Math.max(num, max)
        }
    }
    return {arr: arr.sort((a, b) => a - b), max}
}
/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
    const m = _mapIdxToDuplicates(nums)
    const {
        arr, max
    } = _removeDuplicates(nums)

    return dfs(max, m, {})
};

const dfs = (num, m, memo) => {
    if(num===0){
        return 0
    }
    if(num===1){
        return 1*m.get(1)
    }
    if(num in memo) return memo[num]
    memo[num]=Math.max(dfs(num-1, m,memo), m.get(num)*num+dfs(num-2,m, memo))
    return memo[num]
}
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))//9
// Bottom Up
