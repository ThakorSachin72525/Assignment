let ia = document.getElementById("a");
let ib = document.getElementById("b");
let ibtn = document.getElementById("btn");
let ir = document.getElementById("result");

btn.addEventListener("click", () => {
  if (ib.value === ia.value) {
    ir.innerHTML = "Password Matched";
  } else {
    ir.innerHTML = "Password not Matched";
  }
});
