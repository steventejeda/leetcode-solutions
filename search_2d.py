class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
       
        if not matrix or not matrix[0]:
            return False
        
        rows = len(matrix)
        columns = len(matrix[0])
        row = 0
        column = columns - 1
        
        while True:
            if row < rows and column >= 0:
                if matrix[row][column] == target:
                    return True
                elif matrix[row][column] < target:
                    row += 1
                else:
                    column -= 1
            else:
                return False