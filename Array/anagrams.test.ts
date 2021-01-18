import {
  groupAnagrams,
  groupAnagramsMap,
  groupAnagramsReduce,
} from "./anagrams";

describe("Method 1.", () => {
  it("works with regular inputs", () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]];
    const result = groupAnagrams(strs);
    expect(result).toEqual(output);
  });
  it("works with empty inputs", () => {
    const strs = [""];
    const output = [[""]];
    const result = groupAnagrams(strs);
    expect(result).toEqual(output);
  });
  it("works with single char input", () => {
    const strs = ["a"];
    const output = [["a"]];
    const result = groupAnagrams(strs);
    expect(result).toEqual(output);
  });
});
describe("Method 2.", () => {
  it("works with regular inputs", () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]];
    const result = groupAnagramsMap(strs);
    expect(result).toEqual(output);
  });
  it("works with empty inputs", () => {
    const strs = [""];
    const output = [[""]];
    const result = groupAnagramsMap(strs);
    expect(result).toEqual(output);
  });
  it("works with single char input", () => {
    const strs = ["a"];
    const output = [["a"]];
    const result = groupAnagramsMap(strs);
    expect(result).toEqual(output);
  });
});
describe("Method 3.", () => {
  it("works with regular inputs", () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]];
    const result = groupAnagramsReduce(strs);
    expect(result).toEqual(output);
  });
  it("works with empty inputs", () => {
    const strs = [""];
    const output = [[""]];
    const result = groupAnagramsReduce(strs);
    expect(result).toEqual(output);
  });
  it("works with single char input", () => {
    const strs = ["a"];
    const output = [["a"]];
    const result = groupAnagramsReduce(strs);
    expect(result).toEqual(output);
  });
});
