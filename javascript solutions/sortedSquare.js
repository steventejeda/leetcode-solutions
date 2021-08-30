function sortedSquaredArray(array) {
    // Write your code here.
      const sortedSquares = new Array(array.length).fill(0);
      
      for(let idx = 0; idx < array.length; idx++) { 
          const value = array[idx];
          sortedSquares[idx] = value * value;
      }
      
      sortedSquares.sort((a, b) => a - b);
      return sortedSquares
      }
  
  