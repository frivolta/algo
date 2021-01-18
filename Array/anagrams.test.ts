import { groupAnagrams, isAnagram } from './anagrams';

describe('func: isAnagram', () => {
  it('returns true for anagram input', () => {
    const input = "eat"
    const checkValue="tea"
    expect(isAnagram(input, checkValue)).toBeTruthy()
  });
  it('returns false for not anagram input', () => {
    const input = "eat"
    const checkValue="tab"
    expect(isAnagram(input, checkValue)).toBeFalsy()
  });
  it('returns true for two empty strings', () => {
    const input = ""
    const checkValue=""
    expect(isAnagram(input, checkValue)).toBeTruthy()
  });
});


describe('Method 1.', () => {
  it('works with regular inputs', () => {
    const strs = ["eat","tea","tan","ate","nat","bat"]
    const output = [["eat","tea","ate"],["tan", "nat"], ["bat"]]
    const result = groupAnagrams(strs)
    expect(result).toEqual(output)
  });
  it('works with empty inputs', () => {
    const strs = [""]
    const output = [[""]]
    const result = groupAnagrams(strs)
    expect(result).toEqual(output)
  });
  it('works with single char input', () => {
    const strs = ["a"]
    const output = [["a"]]
    const result = groupAnagrams(strs)
    expect(result).toEqual(output)
  });
});
 