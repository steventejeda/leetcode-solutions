class Solution(object):
    def setZeroes(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        if matrix == None or len(matrix) == 0:
            pass
        elif len(matrix) == 1 and len(matrix[0]) == 1:
            pass
        else:
            rows_with_0 = [False]*len(matrix)
            cols_with_0 = [False]*len(matrix[0])
            for rows in range(len(matrix)):
                for columns in range(len(matrix[0])):
                    if matrix[rows][columns] == 0:
                        rows_with_0[rows] = True
                        cols_with_0[columns] = True

            for rows in range(len(matrix)):
                for columns in range(len(matrix[0])):
                    if rows_with_0[rows] or cols_with_0[columns]:
                        matrix[rows][columns] = 0