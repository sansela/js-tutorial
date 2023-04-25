function generatePara() {
    let totalWords = Number(document.getElementById("totalWords").value);
    document.getElementById("totalWords").value = ""
    console.log("Total words"+totalWords+typeof(totalWords));
    let newPara = document.createElement("p");
    let words = "";
    for(let i=0; i< totalWords; i++) {
        words += generateRandomWord() + " ";
    }
    newPara.innerHTML = words;
    document.querySelector(".container").append(newPara);
}

function generateRandomWord() {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let maxNumberOfCharsInWord = Math.floor(Math.random()*15)+1
    let word = "";
    for(let i=0; i< maxNumberOfCharsInWord; i++) {
        word = word + alphabets[Math.floor(Math.random()*25)];
    }
    return word.toLocaleLowerCase();
}