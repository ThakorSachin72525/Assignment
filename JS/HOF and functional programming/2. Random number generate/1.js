let delay = 3;

const time = setInterval(() => {
    if ( delay === 0 ) {
        console.log("Timeout");
    } else {
        console.log("Remaining time: " + delay);
        delay--;
    }
}, 1000);