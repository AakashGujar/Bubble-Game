makebubble = () => {
  var a = " ";
  for (var i = 0; i <= 139; i++) {
    var rn = Math.round(Math.random() * 10);
    a += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbot").innerHTML = a;
};

var timer = 3;
function runTimer() {
  var timerFn = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerFn);
    }
  }, 1000);
}

runTimer();
makebubble();
