# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        
        if not head or not head.next:
            return head

        num, current = 1, head
        while current.next:
            current = current.next
            num += 1
        current.next = head

        current, tail = head, current
        for nums in range(num - k % num):
            tail = current
            current = current.next
        tail.next = None

        return current