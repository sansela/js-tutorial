//DOM Manipulation
// document
// body
// head
// firstChild
// lastChild
// Children
// getElementById
// getElementsByclass
// querySelector
// CSS property Change
// createElement
// append
// remove
// create buttons - onclick add heading and remove heading

// console.log(document); // observation: 2 scripts tags added even there is only 1
// console.log(document.body);
// console.log(document.head);
// console.log(document.body.firstChild); observation: First child should be <div> but it is text as it counts space.
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild); script
// console.log(document.body.children);
// console.log(document.body.childNodes);
// console.log(document.getElementById("hello"));
// console.log(document.getElementById("hello").innerText);
// console.log(document.getElementsByClassName("hola"));
// console.log(document.getElementsByClassName("hola")[0].innerHTML);
// console.log(document.querySelector(".hola"));
// console.log(document.querySelectorAll(".hola")[1]);
// console.log(document.querySelector("span"));
const span = document.querySelector("span");
span.style.textTransform ="uppercase";
span.style.backgroundColor= "blue";
span.style.color = "white";
span.style.font = "20px cursive";

function addHeading() {
    const heading = document.createElement("h1")
    heading.innerHTML = "this is the HEADING";
    // document.body.appendChild(heading);
    document.body.prepend(heading);
}

function deleteHeading() {
    document.getElementsByTagName("h1")[0].remove();
}

// document.querySelector("#hello").setAttribute("onclick", "addHeading()");
// addHeading();

const addButton = document.querySelectorAll("button")[0];
addButton.style.backgroundColor = "red";
addButton.style.font = "20px monospace";
addButton.style.padding = "1.4vmax 2vmax"
addButton.setAttribute("onclick", "addHeading()");

const deleteButton = document.querySelectorAll("button")[1];
deleteButton.style.backgroundColor = "green";
deleteButton.style.font = "20px monospace";
deleteButton.style.padding = "1.4vmax 2vmax"
deleteButton.setAttribute("onclick", "deleteHeading()");