function numberChecker(numbers) {
  return function (number) {
    return numbers.includes(number);
  };
}
const numbersArray = [1, 3, 5, 7, 9];
const checkNumber = numberChecker(numbersArray);

console.log(checkNumber(3)); // Output: true
console.log(checkNumber(6)); // Output: false
