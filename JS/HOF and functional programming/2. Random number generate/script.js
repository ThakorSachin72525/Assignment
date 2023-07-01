window.addEventListener("DOMContentLoaded", function() {
    const headingElement = document.getElementById("heading");
    const boxElement = document.querySelector(".box");
    const delay = 3; // Set the delay in seconds
  
    let countdown = delay;
    const countInterval = setInterval(() => {
      if (countdown === 0) {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        const randomNumElement = document.createElement('h1');
        randomNumElement.textContent = "Random number: " + randomNum;
        boxElement.appendChild(randomNumElement);
        headingElement.remove(); // Remove the heading element
        clearInterval(countInterval);
      } else {
        headingElement.textContent = "Remaining Time in seconds to generate Random Number... " + countdown + " seconds";
        countdown--;
      }
    }, 1000);
  });
  