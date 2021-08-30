//Time complexity: O(n)
//Space complexity: O(n) due to having to create additional arrays

var isPalindrome = function(head) {
    //Assign values as a empty array 
    //If head does not return null, push all of the elements into the array.
    //Traverse through to identify if the array is a Palindrome and return 
    //whether it's true or false.
    let values = [];
    while (head !== null) {
        values.push(head.val)
        head = head.next;
    }
    for (let i = 0; i < values.length >> 1; i++){
        if (values[i] !== values[values.length - i - 1]){
            return false;
        }
    }
    return true;
};