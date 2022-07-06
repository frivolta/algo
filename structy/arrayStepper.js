const arrayStepper = (nums) => {
    return dfs(nums, 0, 0, Infinity)
};

function dfs(nums, idx=0, jumps, minJumps){

    if(idx === nums.length-1) return jumps
    if(nums[idx]===0 || idx>nums.length-1) return Infinity;

    for(let i = 1; i<=nums[idx]; i++){
        const currMin = dfs(nums, idx+i, jumps+1, minJumps)
        minJumps = Math.min(currMin, minJumps)
    }

    return minJumps===Infinity ? -1 : minJumps
}
console.log(arrayStepper([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));