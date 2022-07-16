const isEqualSum = (a1, a2)=>{
    let a1Sum=0;
    let a2Sum =0
    a1.forEach(a=>a1Sum+=a)
    a2.forEach(a=>a2Sum+=a)
    return a1Sum===a2Sum
}
let canPartition = function (num) {
    const N = num.length

    const dfs = (idx,l1,l2) => {
        if(idx>N){
            return false
        }
        if(isEqualSum(l1,l2) && (l1.length+l2.length===N)){
            return true
        }
        return dfs(idx+1, [...l1, num[idx]], l2) || dfs(idx+1, l1, [...l2, num[idx]])
    }


    return dfs(0, [], []);
};

console.log(canPartition([1, 2, 3, 4]))