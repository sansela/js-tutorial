const title = document.getElementById("title");
const desc = document.getElementById("desc");
const form = document.querySelector("form");

const items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log("initial items:"+items);
clearItems();
displayItems();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const item = {
        title: title.value,
        desc: desc.value
    }
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    clearItems();
    displayItems();
});

function clearItems() {

    items.forEach((value, index) => {
        const item = document.querySelector("#item");
        if(item) {
            item.remove();
        }
    })
}

function deleteItem(index) {
    clearItems();
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    displayItems();
}

function displayItems() {
    items.forEach((value, index) => {

        const para = document.createElement("p");
        para.textContent = value.title;

        const span = document.createElement("span");
        span.textContent = value.desc;

        const itemContentDiv = document.createElement("div");
        itemContentDiv.setAttribute("class", "item-content");

        itemContentDiv.append(para);
        itemContentDiv.append(span);

        const itemDiv = document.createElement("div");
        itemDiv.setAttribute("id", "item");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "-";

        deleteButton.addEventListener("click", () => {
            deleteItem(index);
        });

        itemDiv.append(itemContentDiv);
        itemDiv.append(deleteButton);

        const containerDiv = document.querySelector("#container");
        containerDiv.append(itemDiv);

        console.log(value);
    });
}