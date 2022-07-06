function hasSingleCycle(array) {
    const visitedIdx = []
    const queue = [0]
    while(visitedIdx.length<=array.length){
        const index = queue.shift()
        if(array[index]===0)return false
        visitedIdx.push(index)
        const nextIndex = getNextIndex(array, index)

        queue.push(nextIndex)
    }
    const last = visitedIdx.splice(visitedIdx.length-1,1)
    visitedIdx.sort((a,b)=>a-b)
    for(let i =0; i<visitedIdx.length;i++){
        if(i!==visitedIdx[i])return false
    }
    return last[0]===0
}


const getNextIndex = (array, index)=>{
    const nextIdx = (array[index]+index)%array.length
    return nextIdx>=0 ? nextIdx : nextIdx+array.length
}
const array = [2, 3, 1, -4, -4, 2]

// Should return 5
console.log(hasSingleCycle(array))

//console.log()