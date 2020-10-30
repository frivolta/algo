import { getRotations, rotate, reverse, rotate_reverse } from './rotate_array'

const nums = [1,2,3,4,5,6,7]

it('should use the correct k', () => {
  expect(getRotations(nums, 3)).toEqual(3)
  expect(getRotations(nums, 10)).toEqual(3)
})


it('should return the correct array', () => {
  const result = [5, 6, 7, 1, 2, 3, 4]
  const k = 4
  expect(rotate(nums, k)).toEqual(result)
})

describe('Method 2.', () => {
  it('reverse function should return the reveresed array', () => {
    expect(reverse(nums, 0, 6)).toEqual([7,6,5,4,3,2,1])
  })

  it('should return the correct array', () => {
  const result = [5, 6, 7, 1, 2, 3, 4]
  const k = 4
  expect(rotate_reverse(nums, k)).toEqual(result)
})
})  

