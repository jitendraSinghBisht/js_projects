const boom = new Audio("../assets/audio/boom.wav");
const clap = new Audio("../assets/audio/clap.wav");
const hihat = new Audio("../assets/audio/hihat.wav");
const kick = new Audio("../assets/audio/kick.wav");
const openhat = new Audio("../assets/audio/openhat.wav");
const ride = new Audio("../assets/audio/ride.wav");
const snare = new Audio("../assets/audio/snare.wav");
const tink = new Audio("../assets/audio/tink.wav");
const tom = new Audio("../assets/audio/tom.wav");

const KeyA = document.querySelector('.KeyA');
const KeyS = document.querySelector('.KeyS');
const KeyD = document.querySelector('.KeyD');
const KeyF = document.querySelector('.KeyF');
const KeyG = document.querySelector('.KeyG');
const KeyH = document.querySelector('.KeyH');
const KeyJ = document.querySelector('.KeyJ');
const KeyK = document.querySelector('.KeyK');
const KeyL = document.querySelector('.KeyL');

KeyA.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
KeyS.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
KeyD.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
KeyF.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
KeyG.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
KeyH.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
KeyJ.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
KeyK.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
KeyL.addEventListener('click',(e)=>playAudio(e.target.parentElement.classList[1]));
document.addEventListener('keydown',(e)=>playAudio(e));

function playAudio(e){
    switch (e.code || e){
        case 'KeyA' :
            clap.currentTime = 0;
            KeyA.classList.add('play');
            setTimeout(()=>KeyA.classList.remove('play'),500);
            clap.play();
            break;
        case 'KeyS' :
            hihat.currentTime = 0;
            KeyS.classList.add('play');
            setTimeout(()=>KeyS.classList.remove('play'),500);
            hihat.play();
            break;
        case 'KeyD' :
            kick.currentTime = 0;
            KeyD.classList.add('play');
            setTimeout(()=>KeyD.classList.remove('play'),500);
            kick.play();
            break;
        case 'KeyF' :
            openhat.currentTime = 0;
            KeyF.classList.add('play');
            setTimeout(()=>KeyF.classList.remove('play'),500);
            openhat.play();
            break;
        case 'KeyG' :
            boom.currentTime = 0;
            KeyG.classList.add('play');
            setTimeout(()=>KeyG.classList.remove('play'),500);
            boom.play();
            break;
        case 'KeyH' :
            ride.currentTime = 0;
            KeyH.classList.add('play');
            setTimeout(()=>KeyH.classList.remove('play'),500);
            ride.play();
            break;
        case 'KeyJ' :
            snare.currentTime = 0;
            KeyJ.classList.add('play');
            setTimeout(()=>KeyJ.classList.remove('play'),500);
            snare.play();
            break;
        case 'KeyK' :
            tom.currentTime = 0;
            KeyK.classList.add('play');
            setTimeout(()=>KeyK.classList.remove('play'),500);
            tom.play();
            break;
        case 'KeyL' :
            tink.currentTime = 0;
            KeyL.classList.add('play');
            setTimeout(()=>KeyL.classList.remove('play'),500);
            tink.play();
            break;
    }
}