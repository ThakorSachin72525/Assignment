
btn.addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    if (email.includes('@') && password.length > 8){
        result.innerHTML = "Valid Email and Password"
        result.style.color = "green";
        result.style.backgroundColor = "black";
        
    }else {
        result.innerHTML = "Invalid Email and Password"
        result.style.color = "red";
        result.style.backgroundColor = "black";
        }
    
})
