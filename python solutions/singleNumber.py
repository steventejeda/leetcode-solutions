class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        print(nums)
        while i < (len(nums)):
            if i != len(nums) - 1:
                if nums[i] != nums[i+1]:
                    return nums[i]
                else:
                    i = i + 2
            else:
                return nums[i]