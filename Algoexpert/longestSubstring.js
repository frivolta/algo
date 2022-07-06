function longestSubstringWithoutDuplication(string) {
    if(string.length <=1)return string
    let maxString = ""
    let currentString = ""
    let lp=0
    let rp=0
    while(lp<=string.length-1 && rp<=string.length-1){
       if(!currentString.includes(string[rp])){
           currentString+=string[rp]
           rp++
       }else{
           if(currentString.length>maxString.length) maxString=currentString
           currentString = currentString.slice(1)
           lp++
       }
    }
    return maxString.length> currentString.length?maxString:currentString
}

console.log(longestSubstringWithoutDuplication("abcbde"))