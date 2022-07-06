function isPalindrome(string) {
    return rec(string.split(''))
}


const rec = (arr)=>{
    if(arr.length<=1) return true
    if(arr[0] !== arr[arr.length-1]) return false
    arr.splice(0,1)
    arr.splice(arr.length-1, 1)
    return rec(arr)
}

console.log(isPalindrome("anana"))