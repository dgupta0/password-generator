const characters = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1",
    "2", "3", "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
    "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">",
    ".", "?", "/"];

let firstEl = document.getElementById("firstPass");
let secondEl = document.getElementById("secondPass");
console.log(secondEl)

function generatePass() {
    firstEl.innerText = "";
    secondEl.innerText = "";
    for (let i = 0; i <= 15; i++) {
        randomNum1 = Math.floor(Math.random() * characters.length)
        randomNum2 = Math.floor(Math.random() * characters.length)
        firstEl.innerText += characters[randomNum1]
        secondEl.innerText += characters[randomNum2]
    }

}