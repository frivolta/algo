list = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
]

def hourglassSum(arr):
    maxSum = -63
    for row in range(1, len(arr)-1):
        for cell in range(1, len(arr)-1):
            tempSum = arr[row - 1][cell - 1] + arr[row - 1][cell] + arr[row - 1][cell + 1] + arr[row][cell] + arr[row + 1][cell - 1] + arr[row + 1][cell] + arr[row + 1][cell + 1]
            maxSum = tempSum if tempSum > maxSum else maxSum
    return maxSum

print(hourglassSum(list))