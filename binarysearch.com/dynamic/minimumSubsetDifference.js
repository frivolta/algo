const getDifference = (n1,n2)=>{
    let sum1 = 0
    let sum2 = 0
    for(const n of n1){
        sum1+=n
    }
    for(const n of n2){
        sum2+=n
    }
    return Math.abs(sum1-sum2)
}
const getSlices=(nums, idx)=>{
    return [[nums.slice(0, idx)], [nums.slice(idx)]]
}
let canPartition = function(num) {
    const dp=new Array(num+1).fill(null)
    return recursive(-1, num, [], [], dp)
};

const recursive = (idx, num, n1, n2, dp)=>{
    if(n1.length + n2.length === num.length){
        return getDifference(n1,n2)
    }
    //if(dp[idx+1]) return dp[idx+1]
    if(idx>=num.length){
        return Infinity
    }

    const take = recursive(idx+1, num, [...n1, num[idx+1]], [...n2],dp)
    const notake = recursive(idx+1, num, [...n1], [...n2, num[idx+1]], dp)
    dp[idx+1] =Math.min(take, notake)
    return dp[idx+1]
}

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);