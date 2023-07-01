let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let input = document.getElementById('input');
    let result = document.getElementById('result');
    result.innerHTML = "Loading...";
    time = setTimeout(()=>{
        let reversedInput = input.value.split('').reverse().join('');
        result.innerHTML = "Reverse string is: " + reversedInput;
    
    }, 2000);
})