const findMDI = function(s1, s2) {
    function lcs(i1,i2){
        if(i1>=s1.length || i2>=s2.length){
            return 0
        }
        if(s1[i1]===s2[i2]){
            return 1+lcs(i1+1, i2+1)
        }

        const c1 = lcs(i1+1, i2 )
        const c2 = lcs(i1, i2+1)
        return Math.max(c1,c2)
    }

    const c1 = lcs(0,0);
    console.log(`Minimum deletions needed: ${s1.length - c1}`);
    console.log(`Minimum insertions needed: ${s2.length - c1}`);
};

findMDI('abc', 'fbc');
findMDI('abdca', 'cbda');
findMDI('passport', 'ppsspt');