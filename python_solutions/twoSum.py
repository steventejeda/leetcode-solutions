class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        
        for i, num in enumerate(nums):
            difference = target - num
            if difference in map:
                return [map[difference], i]
            map[num] = i
        return
    
# Time complexity = O(n)
# Space complexity = O(n) 