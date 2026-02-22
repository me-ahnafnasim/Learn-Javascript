const dict = {a: 10, b: 15,c: 7,d: 22, e: 13, f: "hello",g: null};
  
  function getMaxOdd(obj) {
    let maxOdd = null;
  
    for (let key in obj) {
      const value = obj[key];
      // Check if value is a number and odd
      if (typeof value === 'number' && !isNaN(value) && value % 2 !== 0) {
        if (maxOdd === null || value > maxOdd) {
          maxOdd = value;
        }
      }
    }
  
    return maxOdd; // returns null if no odd number found
  }
  
  console.log(getMaxOdd(dict)); // Output: 15