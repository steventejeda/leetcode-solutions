# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        #Create a dummy node whose next pointer will point to the current head
        dummy = ListNode(0)
        dummy.next = head
        #Current will be used to traverse through the list
        current = dummy
        #Traverse through until the second to last node
        while current.next is not None and current.next.next is not None:
        #Declare the first and second node of the pair
            first = current.next
            second = current.next.next
        #Steps to swap every two adjacent nodes and return dummy.next
            first.next = second.next
            current.next = second
            current.next.next = first
            current.next.next = first
            current = current.next.next
        return dummy.next