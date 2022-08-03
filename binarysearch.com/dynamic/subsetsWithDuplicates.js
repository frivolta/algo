const find_subsets = function(nums) {
    nums.sort((a,b)=>a-b)
    let subsets =[[]]
   let start=0;
   let end = 0
    for(let i =0; i<nums.length; i++){
        start=0;
        if(i>0 && nums[i]===nums[i-1]){
            start = end+1;
        }
        end = subsets.length-1;
        for(let j=start; j<end+1; j++){
            const subset = subsets[j].slice()
            subset.push(nums[j])
            subsets.push(subset)
        }
    }
    console.log(subsets)
    return subsets
};



console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`)