var reverse = function(x) {
//Check whether or not if the input is a positive or negative number
//if the input is less than 0 which is considered to be negative number, return a positive number
    if(x < 0) return - 1 * reverse(-x);
//convert the number into a string.
//Split the element, reverse the eleemnt, and then join it together. 
    const solution = (x+"").split('').reverse().join('');
//Validate if the solution is greater than 32 bit, if it is return 0;
//Other wise return the solution.
    return (solution > 2**31 -1) ? 0 : solution;


//Example input "123" expected output "321"

//123 - input
//[1,2,3] - Split it
//[3,2,1] - Reverse it
//321 - join it - output


};

