let findCPS = function (st) {
    const isPalindrome = (s,e)=>{
        if(s>=e){
            return true
        }
        return st[s]===st[e]?isPalindrome(s+1,e-1):false
    }
    const dfs = (s,e)=>{
        if(s===e){
            return 1
        }
        if(s>e){
            return 0
        }


        if(isPalindrome(s,e)){
            return 1+dfs(s+1,e)+dfs(s,e-1)-dfs(s+1,e-1)
        }

        return dfs(s+1,e)+dfs(s,e-1)-dfs(s+1,e-1)
    }
    const res =dfs( 0, st.length - 1);
    return res
};

// console.log('Length of LPS: ---> ' + findCPS('abdbca'));
// console.log('Length of LPS: ---> ' + findCPS('cddpd'));
// console.log('Length of LPS: ---> ' + findCPS('pqr'));
console.log('Length of LPS: ---> ' + findCPS('cac'));