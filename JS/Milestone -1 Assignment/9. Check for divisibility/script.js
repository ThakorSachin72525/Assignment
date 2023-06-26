let oneTO10 = document.getElementById("oneTO10");
let oneTO50 = document.getElementById("oneTO50");
let oneTO100 = document.getElementById("oneTO100");

let one = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let two = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
let three = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

oneTO10.addEventListener("click", () => {
  let divisibleBy3 = [];
  for (let i = 0; i < one.length; i++) {
    let currentNumber = one[i];

    if (currentNumber % 3 !== 0) {
      continue;
    }
    if (currentNumber % 2 === 0) {
      continue;
    }
    divisibleBy3.push(currentNumber);
  }
  oneTO10.innerHTML = "1 to 10 numbers are dibisible by 3 but not by 2 = " + divisibleBy3.join(", ");
});

oneTO50.addEventListener("click", () => {
  let divisibleBy3 = [];
  for (let i = 0; i < two.length; i++) {
    let currentNumber2 = two[i];
    if (currentNumber2 % 3 !== 0) {
      continue;
    }
    if (currentNumber2 % 2 === 0) {
      continue;
    }
    divisibleBy3.push(currentNumber2);
  }
  oneTO50.innerHTML = "1 to 50 numbers are dibisible by 3 but not by 2 = " + divisibleBy3.join(", ");
});

oneTO100.addEventListener("click", () => {
  let divisibleBy3 = [];
  for (let i = 0; i < three.length; i++) {
    let currentNumber3 = three[i];
    if (currentNumber3 % 3 !== 0) {
      continue;
    }
    if (currentNumber3 % 2 === 0) {
      continue;
    }
    divisibleBy3.push(currentNumber3);
  }
  oneTO100.innerHTML = "1 to 100 numbers are dibisible by 3 but not by 2 = " + divisibleBy3.join(", ");
});
