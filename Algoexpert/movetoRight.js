function moveElementToEnd(array, toMove) {
    return recursive(array, toMove, 0,0)
}

const recursive = (array, toMove, curr, idx)=>{
    if(curr>array.length-1) return [...array]
    if(array[idx] === toMove){
        array.splice(idx, 1)
        array.push(toMove)
    }else{
        idx+=1
    }
    return recursive(array, toMove, curr+1,idx)
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))