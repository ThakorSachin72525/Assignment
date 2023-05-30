// Loops
// Q-1 Write a program that generates the multiplication table in textbook format for a given Number. 
// Ans 

let num = 4;

for (let a = 1 ; a <= 10 ; a++) {
    console.log(num, "*", a, "=", num*a);
}

// Q-2 Write a program that prints all the positive even numbers till the number specified. 
// Ans 

let num1 = 20;

for (let b = 1; b <= num1; b++) {
    if (b % 2 ==0) {
        console.log(b);
    }
}
