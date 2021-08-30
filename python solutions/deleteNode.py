class Solution(object):
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        if node == None or node.next == None:
            return None
        node.val = node.next.val
        node.next = node.next.next