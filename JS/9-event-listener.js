//Add Event Listener
// Add class on an event
// Add & Remove the style on mouseover and mouseout - transform: scale()
// blur style
// contextmenu preventDefault()
// window object
// event.target.value
// single click double click
// Remove EventListeners
// Anonymous event listener functions and separate functions

const heading = document.getElementById("heading");
const divBox = document.getElementsByClassName("box1")[0];
const button = document.getElementById("btn");
const inputMsg = document.getElementById("message");

button.addEventListener("click", () => {
    heading.style.backgroundColor= "#394867";
    heading.style.color = "white";
});

divBox.addEventListener("mouseover", () => {
    divBox.classList.add("divClass");
    button.style.filter = "blur(2px)";
    removeEventListener("dblclick", bgColorChange);
});

divBox.addEventListener("mouseout", () => {
    divBox.classList.remove("divClass");
    button.style.filter = "blur(0px)";
});

button.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

inputMsg.addEventListener("change", (e) => {
    console.log(e.target.value);
});

addEventListener("click", ()=> {
    document.body.style.backgroundColor = "#fff";
});

addEventListener("dblclick", bgColorChange);

function bgColorChange() {
    document.body.style.backgroundColor = "#212A3E";    
}
