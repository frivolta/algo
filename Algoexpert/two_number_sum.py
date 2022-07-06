numbers = [3, 5, -4, 8, 11, -1, 6]
target = 10

# O(n2) time
def twoNumberSum(array, targetSum):
    for i in range(len(array)-1):
        for j in range(i+1, len(array)):
            if(array[i]+array[j]==targetSum):
                return [array[i], array[j]]
    return []

# O(nlog(n))
def twoNumberSum_two(array, targetSum):
    array.sort()
    lPointer = 0
    rPointer = len(array)-1
    while lPointer<rPointer:
        currentSum = array[lPointer]+array[rPointer]
        if(currentSum==targetSum):
            return [array[lPointer],array[rPointer]]
        if(currentSum<targetSum):
            lPointer+=1
        if(currentSum>targetSum):
            rPointer-=1



sum =twoNumberSum_two(numbers, target)
print(sum)
