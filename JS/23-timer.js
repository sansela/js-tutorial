//get the HTML elements
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const timerElement = document.querySelector(".timer");
const headingElement = document.querySelector("h1");

//convert to milliseconds
const second = 1000, minute = 60* second, hour = 60* minute, day = 24*hour;

const timerFunction = () => {
    //get current date, month & year and put in the format mm/dd/yyyy
    let now = new Date();
    let currentDate = String(now.getDate()).padStart(2,"0");
    let currentMonth = String(now.getMonth()+1).padStart(2,"0");
    let currentYear = now.getFullYear();

    //timer date
    let dateEntered = String(prompt("Enter Date")).padStart(2, "0");
    let monthEntered = String(prompt("Enter Month").padStart(2, "0"));

    let targetDate = `${monthEntered}/${dateEntered}/${currentYear}`;
    now = `${currentMonth}/${currentDate}/${currentYear}`

    //if the date is past , add +1 to the current year so that it will start the timer for next year
    if(now > targetDate) {
        targetDate = `${monthEntered}/${dateEntered}/${currentYear+1}`;
    }
    
    const clearIntervalId = setInterval(() => {
        const timer = new Date(targetDate).getTime();
        const currentTime = new Date().getTime();

        const difference = timer -currentTime;

        const daysLeft = Math.floor(difference/day);
        const hoursLeft = Math.floor((difference%day)/hour);
        const minutesLeft = Math.floor((difference%hour)/minute);
        const secondsLeft = Math.floor((difference%minute)/second);
        
        daysElement.textContent = daysLeft;
        hoursElement.textContent = hoursLeft;
        minutesElement.textContent = minutesLeft;
        secondsElement.textContent = secondsLeft;

        //if the date is today, i.e., already expired then display Time's Up and clear the interval
        if(difference <0) {
            timerElement.style.display = "none";
            headingElement.innerText = "Time's Up";
            clearInterval(clearIntervalId);
        }

    }, 0);
}

timerFunction();