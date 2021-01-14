import { singleNumber, singleNumber_es6 } from './single_number'

describe('Method 1', () => {
  it('returns the only value if input has lenght 1', () => {
    const list = [1];
    const result = singleNumber(list);
    expect(result).toBe(1);
  })

  it('returns the correct number from a list of multiple values', () => {
    const list = [2, 2, 1]
    const result = singleNumber(list);
    expect(result).toBe(1)
  })
})

describe('Method 2', () => {
  it('returns the only value if input has lenght 1', () => {
    const list = [1];
    const result = singleNumber_es6(list);
    expect(result).toBe(1);
  })

  it('returns the correct number from a list of multiple values', () => {
    const list = [2, 2, 1]
    const result = singleNumber_es6(list);
    expect(result).toBe(1)
  })
})