class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = { ")" : "(", "]" : "[", "}" : "{" }
        
        for slot in s:
            if slot in closeToOpen:
                if stack and stack[-1] == closeToOpen[slot]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(slot)
                
        return True if not stack else False