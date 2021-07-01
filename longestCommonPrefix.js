var longestCommonPrefix = function(strs) {
 // If the input is empty, return an empty string
if(!strs.length) return '';

//Traverse through the letters of the first word 
for(let i = 0; i <= strs[0].length; i++){
//Array.every() = returns whether or not every element in an array passes a given condition
//Check if the first character exists in the same index of every string
    if(!strs.every((string) => string[i] === strs[0][i])){
//if not, return the string up to and including the previous character
        return strs[0].slice(0,i); 
    }
}
    return strs[0];
};