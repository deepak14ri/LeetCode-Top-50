var addBinary = function (a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
  
    // Iterate through the strings from least significant digit (rightmost)
    while (i >= 0 || j >= 0 || carry) {
      let sum = carry;
      if (i >= 0) {
        sum += parseInt(a[i], 10);
        i--;
      }
      if (j >= 0) {
        sum += parseInt(b[j], 10);
        j--;
      }
  
      // Handle carry and digit (0 or 1) for the result
      carry = Math.floor(sum / 2);
      result = (sum % 2) + result;
    }
  
    return result;
  };
  
  console.log(addBinary('11', '1'));