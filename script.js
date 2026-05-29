

function clock(){
    const clock = new Date();
    let time_hour = clock.getHours();
    let time_minute = clock.getMinutes();
    let time_seconds = clock.getSeconds();
    const clock_element = document.getElementById("clock");
    if (time_hour < 10 ) {
        time_hour = "0".concat(time_hour);
    }
     if (time_minute < 10 ) {
        time_minute = "0".concat(time_minute);
    }
     if (time_seconds < 10 ) {
        time_seconds = "0".concat(time_seconds);
    }
    clock_element.textContent = `${time_hour}:${time_minute}:${time_seconds}`;
    
}
clock();
setInterval(clock, 1000);

