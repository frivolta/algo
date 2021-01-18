/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]] */

/* function groupAnagrams(strs: string[]): string[][] {
  
}; */
const groupAnagrams = (strs: string[]): string[][]=> {
  if(strs.length>10000)
    throw "Exceeded strs length"
  const groupedAnagrams = strs.reduce<string[][]>((groupedAcc, stringItem)=>{
    
  const singleGroupedAnagrams = strs.reduce<string[]>((acc, stringToCheck)=>{
      return isAnagram(stringToCheck, stringItem) ? [...acc, stringToCheck] : acc
    }, [])
    return singleGroupedAnagrams.length && groupedAcc.filter(itemArray=>itemArray.toString()===singleGroupedAnagrams.toString()).length === 0  ? [...groupedAcc, singleGroupedAnagrams] : groupedAcc
  }, [])
  
  if(groupedAnagrams.length)
    return groupedAnagrams
  throw "No anagram found"
};
const isAnagram = (value: string, checkValue: string): boolean =>{
  const isSameLenght = value.length === checkValue.length;
  const sortedValue = value.split("").sort().join();
  const sortedCheckValue = checkValue.split("").sort().join()
  return isSameLenght && sortedCheckValue === sortedValue
}

export { isAnagram, groupAnagrams}