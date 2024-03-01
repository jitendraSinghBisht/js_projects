const boxs = document.querySelectorAll(`.box`)
const solve = document.querySelector(`.solve`)
const suffle = document.querySelector(`.suffle`)

function moving(e){
    e.target.style.left = `${e.x-e.target.parentNode.offsetLeft}px`
    e.target.style.top = `${e.y-e.target.parentNode.offsetTop}px`
}

let move = true;
boxs.forEach((box) => {
    box.addEventListener('click',()=>{
        if(move) {
            box.style.zIndex = 10
            box.addEventListener('mousemove',moving)
        } else {
            box.style.zIndex = 1
            box.removeEventListener('mousemove',moving)
        }
        move = !move
    })
})

function solver(){
    boxs.forEach((box) => {box.style.position = "absolute";})

    boxs[0].style.left = `123px`
    boxs[0].style.top = `120px`
    boxs[1].style.left = `352px`
    boxs[1].style.top = `100px`
    boxs[2].style.left = `583px`
    boxs[2].style.top = `103px`
    boxs[3].style.left = `814px`
    boxs[3].style.top = `103px`
    boxs[4].style.left = `1040px`
    boxs[4].style.top = `120px`

    boxs[5].style.left = `140px`
    boxs[5].style.top = `293px`
    boxs[6].style.left = `369px`
    boxs[6].style.top = `290px`
    boxs[7].style.left = `581px`
    boxs[7].style.top = `292px`
    boxs[8].style.left = `814px`
    boxs[8].style.top = `292px`
    boxs[9].style.left = `1039px`
    boxs[9].style.top = `292px`

    boxs[10].style.left = `138px`
    boxs[10].style.top = `483px`
    boxs[11].style.left = `349px`
    boxs[11].style.top = `483px`
    boxs[12].style.left = `581px`
    boxs[12].style.top = `485px`
    boxs[13].style.left = `814px`
    boxs[13].style.top = `483px`
    boxs[14].style.left = `1022px`
    boxs[14].style.top = `483px`

    boxs[15].style.left = `120px`
    boxs[15].style.top = `669px`
    boxs[16].style.left = `349px`
    boxs[16].style.top = `650px`
    boxs[17].style.left = `581px`
    boxs[17].style.top = `650px`
    boxs[18].style.left = `814px`
    boxs[18].style.top = `648px`
    boxs[19].style.left = `1042px`
    boxs[19].style.top = `668px`
}

const spread = () => boxs.forEach((box)=>{
    let x = Math.floor((Math.random()*70))
    let y = Math.floor((Math.random()*30)+10)
    box.style.left = `${x}rem`
    box.style.top = `${y}rem`
})
spread();

suffle.addEventListener('click',spread)
solve.addEventListener('click',solver)

