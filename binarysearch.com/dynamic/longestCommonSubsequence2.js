const findLCSLength = function(s1, s2) {
    const dfs = (start1, start2)=>{
        if(start1>s1.length-1 || start2>s2.length-1){
            return 0
        }
        if(s1[start1]===s2[start2]){
            return 1+dfs(start1+1, start2+1)
        }
        return Math.max(dfs(start1+1, start2), dfs(start1, start2+1))
    }
    return dfs(0,0);
};

console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('passport', 'ppsspt')}`);