import { twoSum } from './two_sum'

describe("Method 1", ()=>{
  it("Returns the correct value with a standard input", ()=>{
    const nums = [2,7,11,15] 
    const target = 9
    const result=[0,1]
    const output = twoSum(nums, target)
    expect(output).toEqual(result)
  })
  it("Returns the correct value with far correct values", ()=>{
    const nums = [3,2,4] 
    const target = 6
    const result=[1,2]
    const output = twoSum(nums, target)
    expect(output).toEqual(result)
  })
})