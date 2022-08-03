const find_subsets = function(nums) {
    const subsets =  dfs(nums, 0,[],[])
    console.log(subsets)
    return subsets
};
const bfs = (nums)=>{
    const queue = [...nums]
    const set = [[]]
    while(queue.length){
        const n = queue.shift();
        const copy = set.slice()
        for(const c of copy){
            set.push([...c, n])
        }
    }
    console.log(set)
    return set
}
const bfs2 = (nums)=>{
    const subsets = []
    subsets.push([])

    for(let i=0;i<nums.length;i++){
        const N = subsets.length;
        const n = nums[i]
        for (let j=0; j<N;j++){
            const subset = subsets[j].slice()
            subset.push(n)
            subsets.push(subset)
        }
    }
    return subsets
}


const dfs = (nums, idx, subset, subsets)=>{
    if(idx>=nums.length){
        subsets.push(subset)
        return subsets
    }
    dfs(nums, idx+1, [...subset], subsets)
    dfs(nums, idx+1, [...subset, nums[idx]], subsets)
    return subsets
}


console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`)