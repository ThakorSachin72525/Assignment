// Call the function before it is declared (This will throw an error)
try {
    const result = multiplyNumbers(3, 4);
    console.log(result);
  } catch (error) {
    console.error(error.message); // Output: multiplyNumbers is not a function
  }
  
  // Function expression (Defining the function after the call)
  const multiplyNumbers = function(a, b) {
    return a * b;
  };
  
  // Call the function after it is defined
  const result = multiplyNumbers(3, 4);
  console.log(result); // Output: 12
  