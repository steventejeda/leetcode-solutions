
//Sample input matrix = [[1,2,3],
//                      [4,5,6],
//                      [7,8,9]]

//Output: [[7,4,1],
//        [8,5,2],
//        [9,6,3]


//Learned alot utilizing the 2 pointer approach to turn the rows into columns ultimately rotating the numbers in the matrix. 
//Loop through each row, and have one pointer in the beginning in the row and one in the end, and go towards the middle as a two pointer approach and swap values as shown above in the sample input and output. 
//For example it shows that 1,2,3 rotated into a column to the right causing the rest of the elements to rotate as well. 

var rotate = function(matrix) {

    for(let rows = 0; rows < matrix.length; rows++) { 
        for(let columns = rows; columns < matrix.length; columns++) { 
            let tempVar = matrix[rows][columns]
            matrix[rows][columns] = matrix[columns][rows];
            matrix[columns][rows] = tempVar;
        }

    }

    for(let rows = 0; rows < matrix.length; rows++) { 
        for(let columns = 0; columns < (matrix.length / 2); columns++) { 
            let tempVar = matrix[rows][columns]
            matrix[rows][columns] = matrix[rows][matrix.length-1-columns];
            matrix[rows][matrix.length-1-columns] = tempVar;
        }

    }
     
};