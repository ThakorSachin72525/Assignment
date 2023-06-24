let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("op");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    switch (operator.value) {
        case "+":
            result.innerHTML = (parseInt(num1.value) + parseInt(num2.value));
            break;
            
        case "-":
            result.innerHTML = (parseInt(num1.value) - parseInt(num2.value));
            break;
            
        case "*":
            result.innerHTML = (parseInt(num1.value) * parseInt(num2.value));
            break;
            
        case "/":
            result.innerHTML = (parseInt(num1.value) / parseInt(num2.value));
            break;
    }
})