// async await is a better way to handle promises with clean code.
//try- catch to handle exceptions. 
//you can throw error explictly. 

const quote = document.querySelector("h1");
const url = "https://catfact.ninja/fact";

const fetchData = async () => {
   try {
    console.log("a")
    const response = await fetch(url);
    console.log("b");
    const data = await response.json();
    quote.innerText = data.fact;
    const error = new Error("my wali error");
    error.name = "Hippo Error";
    throw error
   } catch(error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
   }
   finally {
    console.log("always executes");
   }
}
console.log("1");
fetchData();//.catch(e=> console.log(e));
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
console.log("11");