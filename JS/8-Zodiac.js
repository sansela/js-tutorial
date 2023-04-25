const changeBackGround = () => {
    let zodiac = document.querySelector("#zodiac").value;
    console.log(zodiac);
    switch(zodiac) {
        case "Aries":
            document.body.style.backgroundColor = "#9e0142";
            break;
        case "Tarus":
            document.body.style.backgroundColor = "#d53e4f";
            break;
        case "Gemini":
            document.body.style.backgroundColor = "#f46d43";
            break;
        case "Cancer":
            document.body.style.backgroundColor = "#fdae61";
            break;
        case "Leo":
            document.body.style.backgroundColor = "#fee08b";
            break;
        case "Virgo":
            document.body.style.backgroundColor = "#e6f598";
            break;
        case "Libra":
            document.body.style.backgroundColor = "#abdda4";
            break;
        case "Scorpio":
            document.body.style.backgroundColor = "#66c2a5";
            break;
        case "Sagittarius":
            document.body.style.backgroundColor = "#3288bd";
            break;
        case "Aquaris":
            document.body.style.backgroundColor = "#5e4fa2";
            break;
        case "Capricorn":
            document.body.style.backgroundColor = "#1b830d";
            break;
        case "Pisces":
            document.body.style.backgroundColor = "#29f3fb";
            break;
        default:
            document.body.style.backgroundColor = "#ffffff";
            break;
    }
}