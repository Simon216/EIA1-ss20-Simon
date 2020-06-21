
var sounds: HTMLAudioElement [] = [];
        sounds.push (new Audio ("A.mp3"));
        sounds.push (new Audio ("C.mp3"));
        sounds.push (new Audio ("F.mp3"));
        sounds.push (new Audio ("G.mp3"));
        sounds.push (new Audio ("hihat.mp3"));
        sounds.push (new Audio ("kick.mp3"));
        sounds.push (new Audio ("laugh-1.mp3"));
        sounds.push (new Audio ("laugh-2.mp3"));
        sounds.push (new Audio ("snare.mp3"));

function playSample(samplenumber: number): void {
    sounds[samplenumber].play();
    
    if (record == true) {
        Sound.push(samplenumber);
    }
}

window.addEventListener("load", function() {
    document.querySelector("#b1").addEventListener("click", function() { playSample(0); });
    document.querySelector("#b2").addEventListener("click", function() { playSample(1); });
    document.querySelector("#b3").addEventListener("click", function() { playSample(2); });
    document.querySelector("#b4").addEventListener("click", function() { playSample(3); });
    document.querySelector("#b5").addEventListener("click", function() { playSample(4); });
    document.querySelector("#b6").addEventListener("click", function() { playSample(5); });
    document.querySelector("#b7").addEventListener("click", function() { playSample(6); });
    document.querySelector("#b8").addEventListener("click", function() { playSample(7); });
    document.querySelector("#b9").addEventListener("click", function() { playSample(8); });


    var play;
    var Sound = [2, 5, 6];
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
        Sound = [1, 3, 7];
    });
    /
       // var Button: string[] = ['#play', '#micro', '#trash'];
    // document.querySelector(Button[1]).addEventListener('click', mic)
    playbutton.addEventListener('click', function{}{
    
        if (playbutton.getAttribute()) {
            
        }
    
        if (playbutton.onplay) {
            playbutton.onpause;
        } else {
            playbutton.onplay;
        }
    })
    })
    
    document.querySelector("#stop").addEventListener('click', Beat);
    
    function Beat() {
        setInterval(function() {
            playSample(4); playSample(5); playSample(8)
           }, 450);
    
        function imgchange () {
            ("#stop").attr("class", "fas fa-play");
        }
        
    }
    
    
    //Buttons//
        var Buttons: string [] = ['#play', '#stop', '#micro', 'trash'];
    
    
        var newAudio:
    
    
    /
    document.querySelector("img").addEventListener('click', Beat);
    
    function Beat() {
    
        setInterval(function() {
            playSample(4); playSample(5); playSample(8)
           }, 450);
    }
    
    
    var playbutton:HTMLElement = document.querySelector('img');
    
    playbutton.addEventListener('click', function{}{
    
        if (playbutton.onplay) {
            playbutton.onpause;
        } else {
            playbutton.onplay;
        }
    })
    
    
    
    playbutton.addEventListener('click', Beat {
        if (playbutton.) {
            
        }
    })
    
    /
    function Beat() {
    
        playbutton.getAttribute('class', 'active');
    
        setInterval(function() {
            playSample(4); playSample(5); playSample(8)
           }, 450);
    }
    
    
    document.querySelector("img").addEventListener('click', Beat);
    
    var stop:HTMLElement = document.querySelector('img');
    
    if (stop.getAttribute('class') == 'active') {
        stop.setAttribute('class', '')
    } else {
        stop.setAttribute('class', 'active')
    }
    */
});
   