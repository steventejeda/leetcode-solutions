class Solution(object):
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        if len(nums) == 0:
            return None
        
        length = len(nums) // 2
        root = TreeNode(val = nums[length])
        root.right = self.sortedArrayToBST(nums[length + 1:])
        root.left = self.sortedArrayToBST(nums[0 : length])
        
        return root