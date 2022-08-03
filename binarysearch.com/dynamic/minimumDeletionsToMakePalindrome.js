let findMinimumDeletions = function(st) {
    const longestPalSubs = (si, ei)=>{
        if(si>ei){
            return 0
        }
        if(si===ei){
            return 1
        }

        if(st[si]===st[ei]){
            return 2+longestPalSubs(si+1, ei-1)
        }
        const s = longestPalSubs(si+1,ei)
        const e = longestPalSubs(si, ei-1)
        return Math.max(s,e)
    }

    return st.length-longestPalSubs(0, st.length-1)
};

console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('abdbca'));
console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('cddpd'));
console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('pqr'));