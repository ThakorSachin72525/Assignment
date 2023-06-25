let red = document.getElementById('red');

let green = document.getElementById('green');

let blue = document.getElementById('blue');

let yellow = document.getElementById('yellow');

let result = document.getElementById('result');

let mix = document.getElementById('mix');

mix.addEventListener('click', () => {
    if (red.checked) {
        result.innerHTML = 'red'
    } else
    result.innerHTML = 'green'
});