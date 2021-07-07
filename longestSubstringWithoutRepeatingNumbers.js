var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
//The key will be the individual character value
//The value will be the character index
    const map = {};
//Before looping through the string, the front and back index are all
//pointed to the start
    let frontIdx = 0;
    let backIdx = 0;
    let maxLength = 0;
    for(;frontIdx < s.length; frontIdx += 1){
//Identify if a value is already in the map, and the backIdx is less than or equal to existing value
//If the value does not exist append the value and update the maximum length
        const existingVal = map[s[frontIdx]];
        if(existingVal !== undefined && backIdx <= existingVal){
            backIdx = existingVal + 1;
        }
    map[s[frontIdx]] = frontIdx;
//The maximum length will be the current maximum length or front minus back + 1
    maxLength =  Math.max(frontIdx - backIdx + 1, maxLength);
    }
    return maxLength;
};