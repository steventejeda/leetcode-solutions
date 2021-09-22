class Solution:
    def maxArea(self, height: List[int]) -> int:
        result = 0
        left = 0
        right = len(height) - 1
        
        while (left < right):
            if height[left] <= height[right]:
                answer = height[left] * (right - left)
                left += 1
            else:
                answer = height[right] * (right - left)
                right -= 1
            if answer > result:
                result = answer
        return result