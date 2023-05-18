const form = document.querySelector("nav form");
const loc = document.querySelector(".location");
const temparatureElement = document.querySelector(".weather1");
const locationElement = document.querySelector(".weather2 p");
const timeElemet = document.querySelector(".weather2 span");
const emojiElement = document.querySelector(".weather3 p img");
const textElement = document.querySelector(".weather3 span");

form.addEventListener("submit",  (e) => {
    e.preventDefault();
    fetchWeather(loc.value)
} )

const fetchWeather = async(location) => {
    try {
        const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=8b940adc135e4fb9b4c205813231805&q=${location}&aqi=no`);
        const data = await result.json();
        const {
            location: {name, localtime},
            current: {temp_c, condition: {
                text,
                icon
            }}
        } = data;
        updateDOM(name, convertedDate(localtime), temp_c, text, icon);
    } catch (error) {
        console.log(error);
        alert("Location does not exist");
    }
}

const updateDOM = (locationName, time, temparature, text, emoji) => {    
    locationElement.textContent = locationName;
    timeElemet.textContent = time;
    temparatureElement.textContent = temparature;
    textElement.textContent = text;
    emojiElement.src = emoji;
}

const convertedDate = (localtime) => {
    const date = localtime.split(" ")[0];
    const time = localtime.split(" ")[1];
    const day = dayOfTheWeek(new Date(date.replace(/-/g, '\/')).getDay());
    return `${time} - ${day} ${date}`;
}

function dayOfTheWeek(day) {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid Day";
  }
}

fetchWeather("Canada");