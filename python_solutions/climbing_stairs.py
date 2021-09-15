class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 0 or n == 1 or n == 2:
            return n
        else:
            result = 0
            step_1 = 1
            step_2 = 2
            for i in range(2, n):
                result = step_1 + step_2
                step_1 = step_2
                step_2 = result
            return result