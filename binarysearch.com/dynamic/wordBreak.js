/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    return dfs(0, s, wordDict, {})
};

const dfs = (start, is, wordDict, memo)=>{
    if(start===is.length) return true
    if(start in memo) return memo[start]

    for(let end=start+1;end<=is.length;end++){
        const tmp = is.substring(start, end)
        if(wordDict.includes(tmp) && dfs(end, is,wordDict, memo)){

            return memo[start] = true
        }

    }

    return memo[start] = false
}