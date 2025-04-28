// Тоглогчийн ээлжийг хадгөлөх хувьсагч

var activePlayer = 0

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;

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

document.querySelector(".btn-roll").addEventListener("click", function(e) {
    // Шооны буусан тал
    var dice = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "./src/dice-" + dice + ".png";
    
    console.log("Шоо " + dice + " талаараа буулаа.");

    // 1-ээс ялгаатөай үед оноог нэмнэ.

    if (dice !== 1) {
        roundScore = roundScore + dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тохиолдолд тухайн тоглогчийн цуглуулж буй оноог 0 болгоно.
        // Тоглогчийн ээлжийг нөгөө тоглогчид шилжүүлнэ.
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // if (activePlayer === 0){activePlayer = 1;}
        // else {activePlayer = 0;}
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        // 1 буусан тохиолдолд шоог харуулахгүй.
        diceDom.style.display = "none";

    }
})
