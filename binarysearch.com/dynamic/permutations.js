const find_permutations = function(nums) {

    return dfs(nums,0,[],[]);
};

const dfs = (nums, idx,  permutations, currentPermutation)=>{
    if(idx>=nums.length){
        permutations.push(currentPermutation)
        return permutations
    }

    for(let i=0; i<=currentPermutation.length;i++){
        const newPermutation = currentPermutation.slice()
        newPermutation.splice(i, 0, nums[idx])
        dfs(nums, idx+1, permutations, newPermutation)
    }


    return permutations
}



console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`)