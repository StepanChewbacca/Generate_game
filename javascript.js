let genNumber;
let userNumber
const arrayOfUserNumber = [];
let minGenerate;
let maxGenerate;

function generateNumber(max) {
    return genNumber = Math.floor(Math.random() * max);
}


genNumber = generateNumber(10)
console.log(genNumber)


function isTrueNumber(userNumber, genNumber) {
    console.log(userNumber)
    if (userNumber === genNumber)
        return  alert("you win");
    else if (userNumber !== genNumber) {
        document.getElementById("Count_minus").innerText = Number(document.getElementById("Count_minus").innerText)-1
        if (Number(document.getElementById("Count_minus").innerText) === 0) {
            alert("you lose")
        }
    }


}

function count() {

}

function f() {
    userNumber = Number(document.getElementById("user_number").value);
    isTrueNumber(userNumber, genNumber);

}