const powerOfTwo = (input, curr=2) => {
    if(input===1) return true
    if(input===0) return false
    if(curr>input) return false
    if(curr===input) return true
    return powerOfTwo(input, curr*2)
}

console.log(powerOfTwo(16))