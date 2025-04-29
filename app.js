// Тоглогчийн ээлжийг хадгөлөх хувьсагч

var activePlayer = 0

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;
var winScore = 10;

// Ялагч тодорсон эсэх

var winner = false;

// Шооны аль талаараа буусанг хадгалах хувьсагч /1 - 6/

/* <div class="player-score" id="score-0">43</div> */

// Тоглогчдийн цуглуулсан оноо

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

// document.querySelector("#score-0").textContent = 0;
// document.querySelector("#score-1").textContent = 0;

// document.querySelector("#score-1").innerHTML = "<em>YES!<em>";

/* <img src="./src/dice-2.png" alt="Dice" class="dice"></img> */

// Шоог байхгүй болгож туршив.
document.querySelector(".dice").style.display = "none";

// Тоглогчдийн цуглуулж буй оноо

/* <div class="player-current-score" id="current-0">11</div> */

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// document.querySelector("#current-0").textContent = 0;
// document.querySelector("#current-1").textContent = 0;

// <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>

var diceDom = document.querySelector(".dice");
console.log(scores[1]);

// Ялагчийг тодруулах.


document.querySelector(".btn-roll").addEventListener("click", function(e) {

    if (winner !== true) {
    // Шооны буусан тал
    var dice = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "./src/dice-" + dice + ".png";

    console.log(winner);
    
    // console.log("Шоо " + dice + " талаараа буулаа.");

    // 1-ээс ялгаатөай үед оноог нэмнэ.

    if (dice !== 1) {
        roundScore = roundScore + dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тохиолдолд тухайн тоглогчийн цуглуулж буй оноог 0 болгоно.
        // Тоглогчийн ээлжийг нөгөө тоглогчид шилжүүлнэ.
        changeState();

        // 1 буусан тохиолдолд шоог харуулахгүй.
        diceDom.style.display = "none";

    }
}else {
    alert(`Ялагч тодорсон байна. Дахин эхлүүлэхийн тулд "NEW GAME" товчийг дарна уу.`);
}
});

/* <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button> */
document.querySelector(".btn-hold").addEventListener("click", function() {
    
    if (winner !== true) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] > winScore){
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        winner = true; 
    }
    changeState();
    }else {
        alert(`Ялагч тодорсон байна. Дахин эхлүүлэхийн тулд "NEW GAME" товчийг дарна уу.`);
    }
});

// .winner { background-color: #f7f7f7; }

{/* <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button> */}
document.querySelector(".btn-new").addEventListener("click", function() {
    activePlayer = 0
    scores = [0, 0];
    roundScore = 0;
    winner = false;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.querySelector(".dice").style.display = "none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
} );

// DRY буюу нэмэлт функцүүд

function changeState (){
    roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // if (activePlayer === 0){activePlayer = 1;}
        // else {activePlayer = 0;}
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        console.log(scores);
}

function checkWinner(){

}
