var singleNumber = function(nums) {
    const hashTable = {};
    //Interate to reach every element in the array.
    for(num of nums) {
    //Create a count to see if there are any integers that will appear twice. 
    //If it returns false, hashtable is going to be equal to 1;
        hashTable[num] = hashTable[num] + 1 || 1;
        
    }
    //Utilizing the for in method to loop over the keys and values in a JS object.
    for(key in hashTable) {
        if(hashTable[key] === 1) {
            return key;
        }
    }
};