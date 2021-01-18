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

// Method 1. Create an object with sorted keys
// Runtime: 132 ms :) Your runtime beats 74.32 % of typescript submissions.
interface AnagramObject {
  [key: string]: string[];
}
const groupAnagrams = (strs: string[]): string[][] => {
  if (strs.length === 1) return [strs];
  const anagramsObject: AnagramObject = {};
  const sortedStrs = strs.sort();
  sortedStrs.forEach((sortedStr) => {
    const sortedString = sortedStr.split("").sort().join("");
    anagramsObject.hasOwnProperty(sortedString)
      ? (anagramsObject[sortedString] = [
          ...anagramsObject[sortedString],
          sortedStr,
        ])
      : (anagramsObject[sortedString] = [sortedStr]);
  });
  return Object.keys(anagramsObject).map((key) => anagramsObject[key]);
};

// Method 2. Use a Map instead of Object
// Runtime: 272 ms
const groupAnagramsMap = (strs: string[]): string[][] => {
  if (strs.length === 1) return [strs];
  const anagramsMap = new Map<string, string[]>();
  const sortedStrs = strs.sort();
  sortedStrs.forEach((sortedStr) => {
    const sortedString = sortedStr.split("").sort().join();
    const anagram = anagramsMap.get(sortedString);
    anagramsMap.set(
      sortedString,
      anagram ? [...anagram, sortedStr] : [sortedStr]
    );
  });
  return Array.from(anagramsMap.values());
};

// Method 3. Use reduce instead of foreach
// More elegan but slow

const groupAnagramsReduce = (strs: string[]): string[][] => {
  if (strs.length === 1) return [strs];
  const sortedStrs = strs.sort();
  const anagramsObject = sortedStrs.reduce<AnagramObject>((acc, sortedStr) => {
    const sortedString = sortedStr.split("").sort().join("");
    return acc.hasOwnProperty(sortedString)
      ? { ...acc, [sortedString]: [...acc[sortedString], sortedStr] }
      : { ...acc, [sortedString]: [sortedStr] };
  }, {});
  return Object.keys(anagramsObject).map((key) => anagramsObject[key]);
};

export { groupAnagrams, groupAnagramsMap, groupAnagramsReduce };
