let selection = document.getElementById("selection");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  let input = parseInt(document.getElementById("input").value);
  if (selection.value == "Economy") {
    let s1 = input * 4000;
    result.innerHTML = "your rental cost = " + s1;
  } else if (selection.value == "Midsize") {
    let s2 = input * 10000;
    result.innerHTML = "your rental cost = " + s2;
  } else if (selection.value == "Luxury") {
    let s3 = input * 20000;
    result.innerHTML = "your rental cost = " + s3;
  }
});
