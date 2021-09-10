class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        current = 0 
        left = 0 
        right = len(nums) - 1  
        
        while current <= right:
            if nums[current] == 0:
                nums[left], nums[current] = nums[current], nums[left]
                left += 1 
                current += 1  
                
            elif nums[current] == 2:
                nums[current], nums[right]  = nums[right], nums[current] 
        
                right -= 1 
                
            else:
                current += 1 
                