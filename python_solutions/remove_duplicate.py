class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        Declare the index of 1 since the array is sorted, 1 is considered to be unique.
        Iterate through nums, and ensure we are targeting the second to last value since it's considered to be unique
        If the two adjecent integers are not duplicates, move forward. Otherwise, return the index
        """
        count = 0 
    
        for i in range(len(nums)):
            if i < len(nums) - 2 and nums[i] == nums[i + 1]:
                continue
        
            nums[count] = nums[i]
            count += 1
        return count