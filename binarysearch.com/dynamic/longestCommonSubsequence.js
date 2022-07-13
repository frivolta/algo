/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const memo = {}
    const dfs = (t1, t2)=>{
        if(t1>text1.length-1 || t2>text2.length-1){
            return 0
        }
        if(`${t1}${t2}` in memo) return memo[`${t1}${t2}`]
        if(text1[t1]===text2[t2]){
            memo[`${t1}${t2}`] =1 + dfs(t1+1, t2+1)
            return memo[`${t1}${t2}`]
        }
        memo[`${t1}${t2}`] = Math.max(dfs(t1+1, t2), dfs(t1, t2+1))
        return memo[`${t1}${t2}`]

    }
    return dfs(0,0)
};