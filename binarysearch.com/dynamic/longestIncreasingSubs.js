const lengthOfLIS = function(nums) {
    return dfs(0,nums,{})
};

const dfs = (start, nums,memo)=>{
   if(start>=nums.length){
       return 0
   }
   if(start in memo) return memo[start]
    let count = 0
    for(let i=start; i<nums.length;i++){
      if(start===0 || nums[start-1]<nums[i]) {
          count= Math.max(1+dfs(i+1, nums, memo), count)
      }
    }
    return memo[start]=count
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))