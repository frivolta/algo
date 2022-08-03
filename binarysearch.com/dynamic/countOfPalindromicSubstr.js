let findCPS = function (st) {
    const isPalindrome = (s,e)=>{
        if(s>=e){
            return true
        }
        return st[s]===st[e]?isPalindrome(s+1,e-1):false
    }
    let count = 0
    for(let i=0;i<st.length;i++){
        for(let j=i;j<st.length;j++){
            count+=isPalindrome(i,j)?1:0
        }
    }

    return count
};

 console.log('Length of LPS: ---> ' + findCPS('abdbca'));
 console.log('Length of LPS: ---> ' + findCPS('cddpd'));
 console.log('Length of LPS: ---> ' + findCPS('pqr'));
console.log('Length of LPS: ---> ' + findCPS('cac'));