var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;
    
    let number1 = Number.MAX_VALUE;
    let number2 = Number.MAX_VALUE;
    
    for(let i = 0; i < nums.length; i++){
        if (nums[i] <= number1){
            number1 = nums[i]
        } else if (nums[i] <= number2){
            number2 = nums[i]
        } else {
            return true;
        }
    }
    return false;
};