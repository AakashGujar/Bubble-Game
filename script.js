makebubble = () => {
    var a = " ";
    for (var i = 0; i <= 139; i++) {
        var rn = Math.round(Math.random() * 10)
        a += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbot").innerHTML = a;
}

var timer = 60;
function runTimer(){
    setInterval(function (){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }, 1000)
}

runTimer();
makebubble();