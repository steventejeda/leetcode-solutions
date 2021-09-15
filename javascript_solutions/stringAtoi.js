var myAtoi = function(s) {

    let index = 0;
    let sign = 1;
    let result = 0;
    let length = s.length;
    let max_integer = 2147483647;
    let min_integer = - max_integer - 1;
  
  // Read in and ignore any leading whitespace.
    while (s[index] === ' ') index++;
  
  //Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. 
   //Assume the result is positive if neither is present.
    if (s[index] === '+' || s[index] === '-') {
  //Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
      sign = s[index] === '+' ? 1 : -1;
      index++;
    }
  
  //Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0.
    while (s[index] >= '0' && s[index] <= '9') {
      result = (result * 10) + (s[index] - 0);
      if (sign === 1 && result > max_integer) return max_integer;
      if (sign === -1 && result > max_integer + 1) return min_integer;
      index++;
    }
  //Return the integer as the final result.
  
    return result * sign;
      
  };