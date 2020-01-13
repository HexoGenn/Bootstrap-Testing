function Drop(){
    var x = document.getElementById("navbar")
    console.log(x.className)
    if (x.className === "navbar"){
        x.className = "mnavbar"
    } else {
        x.className = "navbar"
    }
}

var nopes = [] //pick random nope from array, will do later cuz lazy
function Nope(){
    var audio = new Audio('audio/no/1.mp3');
    audio.playbackRate = 1.5*Math.random()
    audio.play();
}

function Calc(){
    const num = document.getElementById("numerator")
    const den = document.getElementById("denominator")
    const res = document.getElementById("result")
    let answer = num.value/den.value*100
    if (isNaN(answer)) {
        return
    }
    res.innerText = "Result: "+answer+"%"
}