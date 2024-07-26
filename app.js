let gameSeq=[];
let userSeq=[];

let btns = ["red", "yellow", "green" , "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started")
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerHTML = "Level: " + level;

    let ranIndex = Math.floor(Math.random()*3);
    let ranColor = btns[ranIndex];
    let ranBtn = document.querySelector(`.${ranColor}`);
    //random btn choose
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}


function checkAns(idx) {
    // console.log("curr level",level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp ,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any Key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);


    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}