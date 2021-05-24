class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # If nums is empty return 0
        if not nums:
            return 0
        i=0
        while i<len(nums)-1:
            if nums[i] == nums[i+1]:
                del nums[i]
            else:
                i +=1
        return len(nums)