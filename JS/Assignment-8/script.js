// // This is increasing btn JS 
// const rtb = document.getElementById("btn-2");
// rtb.addEventListener("click", myFunA);

// let a = 0;
// function myFunA() {
//   a++;
//   document.getElementById("box").innerHTML = a;
// }

// // This is decreasing btn JS 
// const ltb = document.getElementById("btn-1");
// ltb.addEventListener("click", myFunB);

// function myFunB(){
//   a--;
//   document.getElementById("box").innerHTML = a;
// }

// const rsb = document.getElementById("end-btn");
// rsb.addEventListener("click", myFunC);

// let c = 0;
// function myFunC(){
//   c = 0;
//   document.getElementById("box").innerHTML = 0;
// }

// Increasing button JS
const increaseBtn = document.getElementById("btn-2");
increaseBtn.addEventListener("click", increaseValue);

let value = 0;

function increaseValue() {
  value++;
  document.getElementById("box").innerHTML = value;
}

// Decreasing button JS
const decreaseBtn = document.getElementById("btn-1");
decreaseBtn.addEventListener("click", decreaseValue);

function decreaseValue() {
  value--;
  document.getElementById("box").innerHTML = value;
}

// Reset button JS
const resetBtn = document.getElementById("end-btn");
resetBtn.addEventListener("click", resetValue);

function resetValue() {
  value = 0;
  document.getElementById("box").innerHTML = value;
}
