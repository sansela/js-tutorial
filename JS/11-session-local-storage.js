const input = document.getElementById("name");
const button = document.getElementById("btn");
const clear = document.getElementById("clear");
const clearSession = document.getElementById("clearSession");

button.addEventListener("click", () => {
    sessionStorage.setItem("key1", input.value);
    localStorage.setItem("key1", input.value);
});

clear.addEventListener("click", () => {
    // localStorage.removeItem("key1");
    localStorage.clear();
});

clearSession.addEventListener("click", ()=> {
    sessionStorage.removeItem("key1");
});


if(sessionStorage.getItem("key1")) {
    alert("from Session storage:"+ sessionStorage.getItem("key1"));
}
if(localStorage.getItem("key1")) {
    alert("from Local storage: "+localStorage.getItem("key1"));
}