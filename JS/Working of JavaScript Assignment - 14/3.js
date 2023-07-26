function addNumbers(num1, num2) {
    console.log(myVar); // It will log 'undefined' since the variable is hoisted but not assigned a value yet
    var myVar; // Variable declaration is hoisted to the top of the function
    myVar = 10; // Variable assignment
    return num1 + num2 + myVar;
  }
  
  const result = addNumbers(5, 7);
  console.log(result); // Output will be 22 (5 + 7 + 10)
  