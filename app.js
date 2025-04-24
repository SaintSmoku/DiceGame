// Тоглогчийн ээлжийг хадгөлөх хувьсагч

var activePlayer = 1

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;

// Шооны аль талаараа буусанг хадгалах хувьсагч /1 - 6/

var dice = Math.floor(Math.random() * 6) + 1;

/* <div class="player-score" id="score-0">43</div> */

// Тоглогчдийн цуглуулсан оноо

window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;


// window.document.querySelector("#score-1").innerHTML = "<em>YES!<em>";

/* <img src="./src/dice-2.png" alt="Dice" class="dice"></img> */

// Шоог байхгүй болгож туршив.
window.document.querySelector(".dice").style.display = "none";

// Тоглогчдийн цуглуулж буй оноо

/* <div class="player-current-score" id="current-0">11</div> */
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;



console.log("Шоо " + dice + " талаараа буулаа.");
