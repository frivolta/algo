const arr = [5, 1, 22, 25, 6, -1, 8, 10];
const sub = [1, 6, -1, 10];

function isValidSubsequence(array, sequence) {
  let foundIdx = null;
  for (let i in sequence) {
    const slicedArr = foundIdx ? array.slice(foundIdx) : array;
    if (slicedArr.indexOf(sequence[i]) > -1) {
      foundIdx = arr.indexOf(sequence[i]);
    } else {
      return false;
    }
  }
  return true;
}

console.log(isValidSubsequence(arr, sub));
