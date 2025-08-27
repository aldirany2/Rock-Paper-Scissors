const choose = ["rock", "paper", "scissors"]
function getComputerChoice() {
    const randomChoose = Math.floor(Math.random() * choose.length);
    const theChoice = choose[randomChoose];
    const compResult = document.querySelector("#compResult").innerHTML = theChoice;

}

getComputerChoice();


const rock = document.querySelector(".rock").addEventListener("click", getHumanChoice);
const paper = document.querySelector(".paper").addEventListener("click", getHumanChoice);
const scissors = document.querySelector(".scissors").addEventListener("click", getHumanChoice);
function getHumanChoice() {
    const result = document.querySelector("#result").innerHTML = this.value;

}