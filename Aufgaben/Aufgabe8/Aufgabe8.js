var sounds = [];
sounds.push(new Audio('Sound/A.mp3'));
sounds.push(new Audio('Sound/C.mp3'));
sounds.push(new Audio('Sound/F.mp3'));
sounds.push(new Audio('Sound/G.mp3'));
sounds.push(new Audio('Sound/hihat.mp3'));
sounds.push(new Audio('Sound/kick.mp3'));
sounds.push(new Audio('Sound/laugh-1.mp3'));
sounds.push(new Audio('Sound/laugh-2.mp3'));
sounds.push(new Audio('Sound/snare.mp3'));
function playSample(samplenumber) {
    sounds[samplenumber].play();
    if (record == true) {
        Sound.push(samplenumber);
    }
}
document.querySelector("#Sound-A").addEventListener('click', function () { playSample(0); });
document.querySelector("#Sound-C").addEventListener('click', function () { playSample(1); });
document.querySelector("#Sound-F").addEventListener('click', function () { playSample(2); });
document.querySelector("#Sound-G").addEventListener('click', function () { playSample(3); });
document.querySelector("#Sound-hihat").addEventListener('click', function () { playSample(4); });
document.querySelector("#Sound-kick").addEventListener('click', function () { playSample(5); });
document.querySelector("#Sound-laugh1").addEventListener('click', function () { playSample(6); });
document.querySelector("#Sound-laugh2").addEventListener('click', function () { playSample(7); });
document.querySelector("#Sound-snare").addEventListener('click', function () { playSample(8); });
var play;
var Sound = [4, 5, 8];
var i = 0;
var playbutton = document.querySelector('#play');
playbutton.addEventListener('click', function () {
    if (playbutton.getAttribute('class') == 'fas fa-play') {
        playbutton.setAttribute('class', 'fas fa-stop');
        Beat();
    }
    else {
        playbutton.setAttribute('class', 'fas fa-play');
        clearInterval(play);
    }
});
function Beat() {
    play = setInterval(function () {
        playSample(Sound[i]);
        i++;
        if (i >= Sound.length) {
            i = 0;
        }
    }, 450);
}
var micro = document.querySelector('#micro');
micro.addEventListener('click', mic);
function mic() {
    if (record == false) {
        record = true;
    }
    else {
        record = false;
    }
}
var record = false;
var deletebutton = document.querySelector('#trash');
deletebutton.addEventListener('click', function () {
    Sound = [4, 5, 8];
});
