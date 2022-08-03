// Given a list of integers nums, consider an operation where you pick any number e and remove every number in nums equal to e. Return the minimum number of operations required such that the length of nums is reduced by at least half.
//
//     Constraints
//
// 1 ≤ n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [7, 9, 9, 7, 3, 4, 5]
// Output
// 2
// Explanation
// Length of the list is 7, so we need to remove at least 4 elements. We can do this by removing all 7s and 9s.
class Solution {
    solve(nums) {
        const m = new Map()
        nums.forEach((num)=>{
            m.has(num)?m.set(num, m.get(num)+1):m.set(num, 1)
        })

        const sorted = Array.from(m).sort((a,b)=>b[1]-a[1])
        let count = nums.length
        let operations = 0
        while(count > Math.floor(nums.length/2)){
            count-=sorted[0][1];
            operations++
            sorted.splice(0,1)
        }
        return operations

    }
}