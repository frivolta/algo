function reverse(nums,k){
    while (k--) {
      nums.unshift(nums.pop())
    }
    return nums
  }
  
  console.log(reverse([1,2,3,4,5], 3))