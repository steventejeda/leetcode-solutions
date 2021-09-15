var isValidSudoku = function(board) {
    let row = {};
    let column = {};
    let box = {};
//Each of the rows and columns must contain the digits 1-9 without repition.
//Traverse through all of the rows and columns, to access each element.
    for(let rows = 0; rows < 9; rows++){
        for(let columns = 0; columns < 9; columns++){
            const value = board[rows][columns];
//Validate 
        if (value !== '.'){
//Create a index that represent the actual box like:
// [][][]
// [][][]
// [][][]
        let boxIndex = Math.floor(rows / 3) * 3 + Math.floor(columns / 3);
            
//Validate if there are any repitition, if so return false
        if(row[`${rows}-${value}`] || column[`${columns}-${value}`] || box[`${boxIndex}-${value}`]) {
            return false;
        }
//Otherwise, push the value in this corresponding map
        row[`${rows}-${value}`] = true;
        column[`${columns}-${value}`] = true;
        box[`${boxIndex}-${value}`] = true;  
            }
        }
    }
    return true;
};