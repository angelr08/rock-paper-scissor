let result = document.querySelector("#result");
let pcChoose = document.querySelector("#pcChoose");
let pcElectionImg = document.querySelector("#pcElectionImg");
let rockButton = document.querySelector("#rockButton");
let scissorButton = document.querySelector("#scissorButton");
let paperButton = document.querySelector("#paperButton");
let buttonsContainer = document.querySelector(".main-buttons-container");
let restartButton = document.querySelector(".restart-button");
let selectText = document.querySelector("#select");
let pcImgContainer = document.querySelector(".pc-election-img-container");

const pcElection = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const play = (player) => {
    let pc = pcElection(1, 3);
    switch (pc) {
        case 1:
            pc = "rock";
            pcElectionImg.setAttribute("src", "./assets/icons8-clenched-fist-skin-type-1-96.png");
            pcImgContainer.style.background = "#DD5555";
            break; 
        case 2:
            pc = "scissor";
            pcElectionImg.setAttribute("src", "./assets/icons8-hand-scissors-skin-type-1-96.png");
            pcImgContainer.style.background = "#1A913C";
            break;
        case 3:
            pc = "paper";
            pcElectionImg.setAttribute("src", "./assets/icons8-stop-gesture-skin-type-1-96.png");
            pcImgContainer.style.background = "#3EA0DE";
            break;
    }
    selectText.style.display = "none";
    pcChoose.style.display = "block";
    pcImgContainer.style.width = "100px";
    pcImgContainer.style.height = "100px";
   if (player == pc) {
        result.textContent = "Draw";
   } else if ((player == "rock" && pc == "scissor") || (player == "scissor" && pc == "paper") || (player == "paper" && pc == "rock")) {
        result.textContent = "You Win!!";
   } else {
        result.textContent = "You Loose!!";
   }
   buttonsContainer.style.display = "none";
   restartButton.style.display = "block";
}

const restart = () => {
    buttonsContainer.style.display = "flex";
    pcElectionImg.setAttribute("src", "");
    pcImgContainer.style.background = "";
    pcImgContainer.style.width = "";
    pcImgContainer.style.height = "";
    pcChoose.style.display = "none";
    selectText.style.display = "block";
    restartButton.style.display = "none";
    result.textContent = "";
}