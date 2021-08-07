var containsDuplicate = function(nums) {
    storedValues = {}

    for(let i = 0; i < nums.length; i++){
        if(storedValues[nums[i]] === undefined){
            storedValues[nums[i]] = nums[i];
        } else{
            return true;
        }
    }
    return false;
};