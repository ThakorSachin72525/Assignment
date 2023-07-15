// Below is Static Method
class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}
console.log(Calculator.add(3, 5));

// class Calculator{
//     constructor(num1 , num2){
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//     Add(){
//         return `${this.num1} + ${this.num2} = ${this.num1 + this.num2}`
//     }
//     Subtract(){
//         return `${this.num1} - ${this.num2} = ${this.num1 - this.num2}`
//     }
//     Multiply(){
//         return `${this.num1} * ${this.num2} = ${this.num1 * this.num2}`
//     }
//     Deviation(){
//         return `${this.num1} / ${this.num2} = ${this.num1 / this.num2}`
//     }
// }
// const calculator = new Calculator(5, 9);
// console.log(calculator.Add());
// console.log(calculator.Subtract());
// console.log(calculator.Multiply());
// console.log(calculator.Deviation());
