let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let input = document.getElementById("input");
  let result = document.getElementById("result");
  let fr = input.value.charAt(0).toUpperCase() + input.value.slice(1);
  result.innerHTML = fr;
  result.style.fontSize = "2rem";
  result.style.fontWeight = "bold";
});
