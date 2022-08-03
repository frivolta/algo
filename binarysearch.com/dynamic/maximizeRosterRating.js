// You are given two lists of integers ratings and ages, both of them the same length. A person i has a skill rating of ratings[i] and is ages[i] old. A team's rating is defined to be the sum of each individual ratings.
//
// Return the maximum team rating you can achieve given that you can pick anyone to be in your team as long as there aren't any two people i and j such that ratings[i] > ratings[j] and ages[i] < ages[j].
//
// Constraints
//
// n ≤ 1,000 where n is the length of ratings and ages
// Example 1
// Input
// ratings = [5, 4, 8]
// ages = [25, 24, 18]

class Solution {
    solve(ratings, ages) {
        const dp = (idx, lastRating, lastAge)=>{
            if(idx>=ratings.length){
                return 0
            }

            let take = 0
            if(ratings[idx]<lastRating || ages[idx]>lastAge){
                take = ratings[idx]+dp(idx+1, ratings[idx], ages[idx])
            }
            const notTake = dp(idx+1, lastRating, lastAge)
            return Math.max(take, notTake)
        }
        return dp(0, 0, 0)

    }
}

const ratings = [5, 4, 8]
const ages = [25, 24, 18]
const ratings2 = [2, 1, 1]
const ages2 = [1, 2, 0]
const solution = new Solution()
console.log(solution.solve(ratings, ages))