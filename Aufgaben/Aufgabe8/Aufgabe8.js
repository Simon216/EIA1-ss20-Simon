var sounds1 = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];
function playSample(samplenumber) {
    var allsounds = new Audio(sounds1[samplenumber]);
    allsounds.play();
    if (recording == true) {
        beat.push(sounds1[samplenumber]);
    }
}
window.addEventListener("load", function () {
    document.querySelector("#b1").addEventListener("click", function () { playSample(0); });
    document.querySelector("#b2").addEventListener("click", function () { playSample(1); });
    document.querySelector("#b3").addEventListener("click", function () { playSample(2); });
    document.querySelector("#b4").addEventListener("click", function () { playSample(3); });
    document.querySelector("#b5").addEventListener("click", function () { playSample(4); });
    document.querySelector("#b6").addEventListener("click", function () { playSample(5); });
    document.querySelector("#b7").addEventListener("click", function () { playSample(6); });
    document.querySelector("#b8").addEventListener("click", function () { playSample(7); });
    document.querySelector("#b9").addEventListener("click", function () { playSample(8); });
    var beat = ["hihat.mp3", "kick.mp3", "laugh-2.mp3"];
    var meinInterval;
    function defbeat() {
        var meineZaehlervariable = 0;
        console.log(meineZaehlervariable);
        console.log(beat[meineZaehlervariable]);
        meinInterval = setInterval(function () {
            var playAudio = new Audio(beat[meineZaehlervariable]);
            playAudio.play();
            meineZaehlervariable++;
            if (meineZaehlervariable >= 3) {
                meineZaehlervariable = 0;
            }
        }, 500);
    }
    //Play und Pause
    var playbutton = document.querySelector("#play");
    playbutton.addEventListener("click", function () {
        if (playbutton.getAttribute("class") == "fas fa-play") {
            playbutton.setAttribute("class", "fas fa-pause");
            defbeat();
        }
        else {
            playbutton.setAttribute("class", "fas fa-play");
            clearInterval(meinInterval);
        }
    });
    //Clear
    document.querySelector("#clear").addEventListener("click", function () { clearbeat(); });
    function clearbeat() {
        beat.length = 0;
    }
    //Record
    document.querySelector("#record").addEventListener("click", function () { recordbeat(); });
    var recording = false;
    function recordbeat() {
        if (recording == false) {
            recording = true;
        }
        else {
            recording = false;
        }
    }
});
