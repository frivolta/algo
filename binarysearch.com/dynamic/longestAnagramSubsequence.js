// Given two lowercase alphabet strings a and b, return the length of the longest anagram subsequence.
//
//     Constraints
//
// n ≤ 100,000 where n is the length of a
// m ≤ 100,000 where m is the length of b
// Example 1
// Input
// a = "afbc"
// b = "cxba"
// Output
// 3
// Explanation
// "abc" is a subsequence in "afbc"
// "cba" is a subsequence in "cxba"
// And abc and cba are anagrams of each other.

class Solution {
    solve(a, b) {
        const s1 = new Map()
        const s2 = new Map()

        for(let i=0; i<a.length; i++){
            s1.set(a[i], s1.get(a[i]) ? s1.get(a[i])+1 : 1)
        }
        for(let i=0; i<b.length; i++){
            s2.set(b[i], s2.get(b[i]) ? s2.get(b[i])+1 : 1)
        }

        let sum =0
        for(const [key, val] of s1){
            if(s2.has(key)){
                sum+=Math.min(s1.get(key), s2.get(key))
            }
        }
        return sum
    }
}