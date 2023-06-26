function printNumbersDivisibleBy3ButNotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
      
      if (currentNumber % 3 !== 0) {
        continue; // Skip the current iteration if not divisible by 3
      }
      
      if (currentNumber % 2 === 0) {
        continue; // Skip the current iteration if divisible by 2
      }
      
      console.log(currentNumber);
    }
  }
  
  // Example usage
  const numbers = [4, 9, 12, 15, 18, 21, 24];
  printNumbersDivisibleBy3ButNotBy2(numbers);
  