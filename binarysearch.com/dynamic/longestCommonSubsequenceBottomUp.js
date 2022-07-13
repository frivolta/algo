/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
    const matrix = new Array(text1.length+1).fill(0).map(()=>new Array(text2.length+1).fill(0)).slice()
    const t1 = text1.split("")
    const t2 = text2.split("")
    for(let r = 1; r<matrix.length;r++){
        for (let c=1; c<matrix[0].length; c++){
            if(t1[r-1] === t2[c-1]){
                matrix[r][c]+=matrix[r-1][c-1]+1
            }else{
                matrix[r][c] = Math.max(matrix[r-1][c], matrix[r][c-1])
            }
        }
    }
    return matrix[matrix.length-1][matrix[0].length-1]
}
console.log(longestCommonSubsequence("abcde", "ace"))
