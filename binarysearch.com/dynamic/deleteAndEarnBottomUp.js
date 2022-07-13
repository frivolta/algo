const _mapIdxToDuplicates = (nums) => {
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
    return max
}
/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
    nums = nums.sort((a,b)=>a-b)
    const m = _mapIdxToDuplicates(nums)
    const max = _removeDuplicates(nums)
    const dp = Array(max+1).fill(0).slice()

    dp[0] = 0
    dp[1] = m.get(1)??0
    for(let i=2; i<dp.length;i++){
        dp[i] = Math.max(dp[i-1], dp[i-2]+m.get(i)*i)
    }
    return dp[dp.length-1]
};

console.log(deleteAndEarn([3,4,2]))//6
