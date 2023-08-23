var timer = 0;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.getElementById("scoreval").textContent = score;
}

function getNewHiT() {
  hitrn = Math.floor(Math.random() * 10);
  document.getElementById("hitval").textContent = hitrn;
}

function runTimer() {
  var timerFn = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timerval").textContent = timer;
      if (timer <= 5) {
        document.getElementById("timerval").style.color = "red";
      }
    } else {
      clearInterval(timerFn);
      document.getElementById("pbot").innerHTML = 
      `<div id="gameover-container">
       <h1 id="gameover">Game Over</h1>
     </div>`;
    }
  }, 1000);
}

function makebubble() {
  var a = " ";
  for (var i = 0; i <= 139; i++) {
    var rn = Math.round(Math.random() * 10);
    a += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbot").innerHTML = a;
}

document.getElementById("pbot").addEventListener("click", function (details) {
  var clickednum = Number(details.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    makebubble();
    getNewHiT();
  }
});

getNewHiT();
runTimer();
makebubble();
