const isPalindrome = (x) => {
    if(x<0) return false
    const arr = [...x.toString().split('')].map((number)=>parseInt(number))
    if(arr.length<2) return true
    return checkPalindrome(arr)
}


const checkPalindrome = (arr)=>{
    if(arr.length<2) return true
    if(arr[0]!==arr[arr.length-1]) return false
    return checkPalindrome(arr.slice(1, arr.length-1))
}


console.log(isPalindrome(-2))