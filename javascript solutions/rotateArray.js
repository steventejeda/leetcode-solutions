var rotate = function(nums, k) {
    //K represents the number of times the array is rotated
    //Get the remainder of K when it's divided by the length of the array.
    k = k % nums.length;
   //Reverse the entire array, starting from the 0th element all the way until the last element
    reverse(nums, 0, nums.length - 1); 
    //Reverse the first K elements in the array
    reverse(nums, 0, k - 1);
    //Reverse the rest of the numbers 
    reverse(nums, k, nums.length - 1);
    
};

//Implement reverse function which accepts the array along with the start and the end of 
// the index.
var reverse = function(nums, start, end) { 
//
    while (start < end) { 
    //Temp variable is to hold the value of the first element. 
        let temp = nums[start];
    //Replace the first element with the last element
        nums[start] = nums[end];
    //Replace the last element with the first element that was saved in the temp variable.
        nums[end] = temp;
        start++;
        end--;
    
         
//Input: [0, 1, 2, 3] 
//Process of rotation: [3,1,2,0] in this case the end of the index will be rotated to the first index
//Output: [3,2,1,0] end result shows that the two original last indexes have be rotated to the first two.
    }
}