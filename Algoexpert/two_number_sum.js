const numbers = [3, 5, -4, 8, 11, -1, 6];
const target = 10;

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let k = i + 1; k < array.length; k++) {
      if (array[i] + array[k] === targetSum) {
        return [array[i], array[k]];
      }
    }
  }
  return [];
}

const result = twoNumberSum(numbers, target);
console.log(result);
