var a = " ";
for(var i = 0; i<=139; i++){
    var rn = Math.round(Math.random()* 100)
    a += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbot").innerHTML =  a;
