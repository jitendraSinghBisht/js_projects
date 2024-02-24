const root = document.querySelector(`:root`)
const size = document.querySelector(`#size-input`)
const cursors = document.querySelectorAll(`.cursor`)
const followers = document.querySelectorAll(`.follower`)
const pfollower = document.querySelector(`.followers div`)

function follow(e){
    root.style.setProperty(`--x`,`${e.x}px`)
    root.style.setProperty(`--y`,`${e.y}px`)
}

document.addEventListener('mousemove',follow)
document.addEventListener('mouseout',()=>{
    root.style.setProperty(`--x`,`50%`)
    root.style.setProperty(`--y`,`50%`)
})

size.addEventListener('change',(e)=>{
    console.log(e.target.value)
    root.style.setProperty(`--size`,`${e.target.value}px`)
})

cursors.forEach((cursor)=> cursor.addEventListener('change',(e)=>{
    root.style.setProperty(`--cursor`,`url(${e.target.value}), auto`);
}))


followers.forEach((follower)=> follower.addEventListener('change',(e)=>{
    pfollower.className = e.target.value;
}))