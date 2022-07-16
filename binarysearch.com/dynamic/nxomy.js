//Time O(n)
//Space O(n)
/**
 * Get an input string, returns, multiple characters
 * @param s -> Input String
 * @returns {*[]} -> Array Of chars
 */
const getCharAppearingTimes =(s) => {
    // Contains chars occurs
    const charMap = new Map()

    // Keep track of multiple characters from map
    const multipleChars = []


    const strArr = s.split('')

    // Not using any reduce because is slower
    for (const char of strArr){
        if(charMap.has(char)){
            charMap.set(char,charMap.get(char)+1)
        }else{
            charMap.set(char, 1)
        }
    }

    // Multiple occurs are pushed to the res array
    for(const [char, occ] of charMap){
        if(occ>1){
            multipleChars.push(char)
        }
    }

    return multipleChars
}

console.log(getCharAppearingTimes("filippo"))