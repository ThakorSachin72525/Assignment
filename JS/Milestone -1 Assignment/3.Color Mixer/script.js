let red = document.getElementById('red');

let green = document.getElementById('green');

let blue = document.getElementById('blue');

let yellow = document.getElementById('yellow');

let result = document.getElementById('result');

let mix = document.getElementById('mix');

mix.addEventListener('click', () => {
    if (red.checked && green.checked) {
        result.innerHTML = 'red & green';
        result.style.backgroundColor = '#804000'
    } else if (red.checked && yellow.checked) {
        result.innerHTML ='red & yellow';
        result.style.backgroundColor = '#ff8000'
    } else if (red.checked && blue.checked) {
        result.innerHTML ='red & blue';
        result.style.backgroundColor = '#800080'
    }
      else if (green.checked && yellow.checked) {
        result.innerHTML = 'green & yellow';
        result.style.backgroundColor = '#80c000'
    } else if (green.checked && blue.checked) {
        result.innerHTML = 'green & blue';
        result.style.backgroundColor = '#004080'
    } 
      else if (yellow.checked && blue.checked) {
        result.innerHTML = 'yellow & blue';
        result.style.backgroundColor = '#808080'
    }
});