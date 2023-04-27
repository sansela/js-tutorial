//setTimeout setInterval clearTimeout clearTimeInterval

const btn = document.getElementById("btn");
const btnInterval = document.getElementById("btnInterval");

const printName = (name) => {
    console.log(`My name is ${name}`);
}

const id = setTimeout(printName, 2000, "santosh");

btn.addEventListener("click", () => {
    clearTimeout(id);
});

const idInterval = setInterval(printName, 1000, "Kumar");
btnInterval.addEventListener("click", () => {
    clearInterval(idInterval);
});


