const findLCSLength = function(s1, s2) {
    const dfs = (start1, start2,count)=>{
        if(start1>s1.length-1||start2>s2.length-1){
            return count
        }

        if(s1[start1]===s2[start2]){
            return dfs(start1+1,start2+1, count+1)
        }

        return Math.max(count,dfs(start1+1,start2,0), dfs(start1, start2+1,0))


    }

    return dfs(0,0,0)
};

console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`);
