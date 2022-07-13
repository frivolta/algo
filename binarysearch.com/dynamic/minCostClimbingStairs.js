/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (costs)=> {
    const memo = {}
    return Math.min(dfs(costs, 0, memo), dfs(costs, 1, memo))
};

const dfs = (costs, index, memo) =>{
    if(index in memo) return memo[index]
    if(index === costs.length){
        return 0
    }
    if(index>costs.length-1){
        return Infinity
    }

    const oneStep = costs[index]+dfs(costs, index+1, memo)
    const twoStep  = costs[index]+dfs(costs,index+2, memo)
    const res = Math.min(oneStep, twoStep)
    memo[index] = res
    return res





}

