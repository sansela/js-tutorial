// fetch api is to call api. It is an alternative to AJAX
// It returns promise
// Need to use .json() method to convert the data to JSON format

const url = "https://catfact.ninja/fact";
const heading = document.querySelector("h1");

const fetchData = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => heading.innerText = data.fact)
        .catch(error => console.log(error));
};

fetchData();