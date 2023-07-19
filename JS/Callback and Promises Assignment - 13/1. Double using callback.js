function doubleWithCallback(arr, callback) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array of integers.');
    }
  
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function.');
    }
  
    const doubledArray = arr.map(callback);
    return doubledArray;
  }

  // Define a callback function to double the value
function doubleElement(num) {
    return num * 2;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  
  try {
    const resultArray = doubleWithCallback(inputArray, doubleElement);
    console.log(resultArray); // Output: [2, 4, 6, 8, 10]
  } catch (error) {
    console.error(error.message);
  }
  