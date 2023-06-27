let btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.addEventListener('click', () => {
    let amount = parseInt(document.getElementById('amount').value);
    let person = parseInt(document.getElementById('person').value);
    result.innerHTML = "Each person will pay : " + amount / person;
});
