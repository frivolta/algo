function isMonotonic(array) {
    if(array.length<2) return true
    const direction=getDirection(array)
    return rec(array, 0, direction)
}

const getDirection = (arr)=>{
    let pointer = 1
    while(arr[0]==arr[pointer]){
        pointer++
    }
    return arr[0] > arr[pointer]?'increasing':'decreasing'
}

const rec = (array, idx, direction)=> {
    if(idx>array.length-1) return true
    if(array[idx] > array[idx+1] && direction==='decreasing') return false
    if(array[idx] < array[idx+1] && direction==='increasing') return false

    return rec(array, idx+1, direction)
}

console.log(isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11]))