// Very first approach to understand the problem
const isPalindrome = (str="")=>{
    return str.split("").reverse().join("") === str && str!==""
}
const NAIVELongestPalindromicSubs = (initial)=>{
    const dfs = (idx, currentString, allStrings)=>{
        if(idx >= initial.length){
            if(isPalindrome(currentString))
            allStrings.add(currentString)

            return allStrings
        }
        if(isPalindrome(currentString))
        allStrings.add(currentString)

        dfs(idx+1, currentString+initial[idx], allStrings)
        dfs(idx+1, currentString, allStrings)
        return allStrings
    }
    let longest = 0
    const pal = dfs(0,"", new Set())
    for(const p of pal){
        longest = Math.max(longest, p.length)
    }
    return longest
}

console.log(NAIVELongestPalindromicSubs("pqr"))