class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        while k:
            popped = nums[len(nums)-1]
            nums.insert(0, popped)
            k-=1
        return nums