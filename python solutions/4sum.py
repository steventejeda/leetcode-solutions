class Solution(object):
    def fourSumCount(self, nums1, nums2, nums3, nums4):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :type nums3: List[int]
        :type nums4: List[int]
        :rtype: int
        """
        length = len(nums4)
        map = {}
        for i in range(0, length):
            for j in range(0, length):
                nums = nums3[i] + nums4[j]
                map[nums] = map.get(nums, 0) + 1
        
        count = 0
        
        for i in range(0, length):
            for j in range(0, length):
                nums = -(nums1[i] + nums2[j])
                if nums in map:
                    count += map[nums]
        return count
