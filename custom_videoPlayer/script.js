const video = document.querySelector('video')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const audio = document.querySelector('#audio')
const lowaudio = document.querySelector('#lowaudio')
const noaudio = document.querySelector('#noaudio')
const mute = document.querySelector('#mute')
const volume = document.querySelector('input[type="range"]')

play.addEventListener('click',()=>{
    pause.style.zIndex='1'
    video.play()
    play.style.zIndex='-1'
})
pause.addEventListener('click',()=>{
    play.style.zIndex='1'
    video.pause()
    pause.style.zIndex='-1'
})
audio.addEventListener('click',()=>{
    mute.style.zIndex='1'
    video.muted = true;
    audio.style.zIndex='-1'
})
lowaudio.addEventListener('click',()=>{
    mute.style.zIndex='1'
    video.muted = true;
    lowaudio.style.zIndex='-1'
})
mute.addEventListener('click',()=>{
    if(video.volume > 0.5) audio.style.zIndex='1'
    else lowaudio.style.zIndex='1'
    video.muted = false;
    mute.style.zIndex='-1'
})
volume.addEventListener('change',()=>{
    if(volume.value > 50){
        audio.style.zIndex='1'
        lowaudio.style.zIndex='-1'
        mute.style.zIndex='-1'
    } else if(volume.value > 0){
        audio.style.zIndex='-1'
        lowaudio.style.zIndex='1'
        mute.style.zIndex='-1'
    } else{
        audio.style.zIndex='-1'
        lowaudio.style.zIndex='-1'
        mute.style.zIndex='1'
    }
    video.volume = (volume.value)/100
})