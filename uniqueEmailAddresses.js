var numUniqueEmails = function(emails) {
    //Declare an empty Set to store our processed emails
          const set = new Set();
    //Traverse through all the emails in the array
    //For every email, split the email into local and domain name
      for (let email of emails) {
        const array = email.split("@");
    
    // ignore everything after first occurence of +
        array[0] = (array[0].split("+"))[0]; 
    
    // replace all dots with nothing i.e. empty string
        array[0] = array[0].replace(/\./g, "");
    
    // add final email ( processed ) to set
        set.add(array.join("@"));
      }
    
      return set.size;
    };