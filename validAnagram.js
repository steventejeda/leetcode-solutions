var isAnagram = function(s, t) {
// Find a way to compare the two strings to see if it's a valid anagram, 
//and compare to see if they are in the same length and order.
//Split function will turn the string into an array. Take every letter as an item at the array on it's own.
//Take all of the letters and sort them alphabetically
//Combine them again using the join method
    let sString =  s.split('').sort().join().toLowerCase();
    let tString =  t.split('').sort().join().toLowerCase();
    
    return(sString === tString);
};