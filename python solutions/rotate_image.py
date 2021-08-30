class Solution(object):
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        matrix.reverse()
        for rows in range(len(matrix)):
            for columns in range(rows):
                matrix[rows][columns], matrix[columns][rows] = matrix[columns][rows], matrix[rows][columns]