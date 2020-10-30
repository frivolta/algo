import { getRotations, rotate, reverse, rotate_reverse, rotate_pop } from './rotate_array'

const nums = [1,2,3,4,5,6,7]

describe('Method 1.', () => {
  it('should use the correct k', () => {
    expect(getRotations(nums, 3)).toEqual(3)
    expect(getRotations(nums, 10)).toEqual(3)
  })
  
  
  it('should return the correct array', () => {
    const result = [5, 6, 7, 1, 2, 3, 4]
    const k = 4
    expect(rotate(nums, k)).toEqual(result)
  })
})  

describe('Method 2.', () => {
  it('reverse function should correctly reveres', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    reverse(nums, 0, nums.length-1)
    expect(nums).toEqual([7,6,5,4,3,2,1])
  })

  it('should return the correct array', () => {
    const nums = [1,2,3,4,5,6,7]
    const result = [5, 6, 7, 1, 2, 3, 4]
    const k = 3
    rotate_reverse(nums, k)
    expect(nums).toEqual(result)
  })
})  

describe('Method 3.', () => {
  it('should return the correct array', () => {
    const nums = [1,2,3,4,5,6,7]
    const result = [5, 6, 7, 1, 2, 3, 4]
    const k = 3
    rotate_pop(nums, k)
    expect(nums).toEqual(result)
  })
})  
