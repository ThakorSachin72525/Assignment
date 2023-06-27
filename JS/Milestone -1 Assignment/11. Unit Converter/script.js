let input = document.getElementById('input');
let result = document.getElementById('result');
let select = document.getElementById('select');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let inputValue = parseFloat(input.value);
  let selectedUnit = select.value;

  if (selectedUnit === 'celsius') {
    let temps = (inputValue * 9/5) + 32;
    result.innerHTML = inputValue + " °C = " + temps + '°F';
  } else if (selectedUnit === 'fahrenheit') {
    let temps = (inputValue - 32) * 5/9;
    result.innerHTML = inputValue + " °F = " + temps + '°C';
  } else if (selectedUnit === 'kilometer') {
    let distance = inputValue * 0.621371;
    result.innerHTML = inputValue + " Kilometer = " + distance + 'Miles';
  } else if (selectedUnit === 'mile') {
    let distance = inputValue * 1.609344;
    result.innerHTML = inputValue + " Miles = " + distance + 'Kilometer';
  }
});
