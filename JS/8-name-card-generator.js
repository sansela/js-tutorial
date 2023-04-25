const generateNammeCard = () => {
    const name = document.querySelector("#name").value;
    const divNameContainer = document.createElement("div");
    divNameContainer.setAttribute("class", "tag");
    divNameContainer.textContent = `Hey, I'm ${name}`;
    document.querySelector(".tags").append(divNameContainer);
}