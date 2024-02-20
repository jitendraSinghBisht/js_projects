const divImgs = document.querySelectorAll('.images')
const details = document.querySelector('.details')

const bgImgLnk = ['https://images.pexels.com/photos/4894421/pexels-photo-4894421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1546863/nature-milky-way-galaxy-constellations-1546863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/5418830/pexels-photo-5418830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

divImgs.forEach((div,i)=>div.style.backgroundImage = `url(${bgImgLnk[i]})`);

divImgs.forEach((div)=>
    div.addEventListener('click',(e)=>{
        dBox(e.target.style.backgroundImage)
    })
);

function dBox(bg){
    details.style.width = '90%'
    details.style.height = '90%'
    details.style.backgroundImage = bg
    details.style.zIndex = 10
    details.children[1].children[0].setAttribute('href',bg.slice(5,bg.length-47))
}

document.querySelector('.cross').addEventListener('click',(e)=>{
    details.style.width = '0%'
    details.style.height = '0%'
    details.style.zIndex = -1
})