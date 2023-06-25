let hm = document.getElementById("hm");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let m1 = parseInt(document.getElementById("m1").value);
    let m2 = parseInt(document.getElementById("m2").value);
    let m3 = parseInt(document.getElementById("m3").value);
    let m4 = parseInt(document.getElementById("m4").value);
    let m5 = parseInt(document.getElementById("m5").value);

    let highestValue = Math.max(m1, m2, m3, m4, m5);
    let highestVariable = '';

    if (highestValue === m1) {
        highestVariable = 'Student-1';
    } else if (highestValue === m2) {
        highestVariable = 'Student-2';
    } else if (highestValue === m3) {
        highestVariable = 'Student-3';
    } else if (highestValue === m4) {
        highestVariable = 'Student-4';
    } else if (highestValue === m5) {
        highestVariable = 'Student-5';
    }
  
    hm.innerHTML = highestVariable + " get highest Score: " + highestValue
});

