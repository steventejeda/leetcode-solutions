var twoSum = function(nums, target) {
    let numberIndex = new Map ();
      let result = [];
      
      for(let i = 0; i < nums.length; i++) { 
          let num = nums[i];
          let neededNum = target - num;
          
          if (numberIndex.has(neededNum)) { 
              result[0] = numberIndex.get(neededNum);
              result[1] = i;
              
              return result
          }
          numberIndex.set(num, i);s
      }
      
      
      return result;
      
  };