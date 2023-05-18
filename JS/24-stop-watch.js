const clock = document.querySelector(".clock");

let sec =0,
 min = 0,
 hr = 0,
 intervalId;

const startStopWatch = () => {
    intervalId = setInterval(() => {
        sec++;
        //if seconds reaches 59 assign 0 to seconds and increment min
        //if minutes reaches 59 assign 0 to minutes and increment hrs
        if(sec === 59) {
            sec = 0;
            min ++;
            if(min === 59) {
                min =0;
                hr++;
            }
        }
        const clockSyntax = `${clockFormat(hr)}:${clockFormat(min)}:${clockFormat(sec)}`;
        clock.textContent = clockSyntax;
    }, 1000);
}

const clockFormat = (time) => {
    return String(time).padStart(2, "0");
}

const stopStopWatch = () => {
    clearInterval(intervalId);
}