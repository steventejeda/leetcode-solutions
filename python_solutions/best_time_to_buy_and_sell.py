class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        length = len(prices)
        
        if length < 2:
            return 0
        
        maxprofit = float('-inf')
        minstock = prices[0]
        
        for price in prices:
            maxprofit = max(maxprofit, price - minstock)
            minstock = min(minstock, price)
        
        return maxprofit