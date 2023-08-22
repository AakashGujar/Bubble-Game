var timer = 60;

function getNewHiT() {
  var rn = Math.floor(Math.random() * 10);
  document.getElementById("hitval").textContent = rn
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
};


getNewHiT();
runTimer();
makebubble();
