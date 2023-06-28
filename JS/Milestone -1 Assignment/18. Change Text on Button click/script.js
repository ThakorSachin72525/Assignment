let t1 = document.getElementById('t1');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    if(t1.innerText == "The most affordable learning platform"){
        t1.innerHTML = 'PW SKILLS';
    } else {
        t1.innerHTML = 'The most affordable learning platform';
    }
});