const sortArray_0_1_2 = (nums) => {
    const zeros = []
    const ones = []
    const twos =[]
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0) zeros.push(0)
        if(nums[i]===1) ones.push(1)
        if(nums[i]===2) twos.push(2)
    }
    return [...zeros, ...ones, ...twos]
}

console.log(sortArray_0_1_2([0,1,2,1,2,2,2,1,0]))