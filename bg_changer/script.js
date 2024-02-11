function randomClr(color){
    const hex = `0123456789ABCDEF`;
    let clr='#';

    for(let i=0;i < 6; i++){
        clr+=hex[Math.floor(Math.random()*16)]
    }

    chngClr(clr);
}

function chngClr(color){
    document.body.style.backgroundColor=`${color}`;
}

const colors = document.querySelectorAll(`.colors`);

colors.forEach((color)=>{
    if (color.id == "randomclr") {
        color.style.backgroundColor = `#3b3b3b`
        color.addEventListener('click',()=>randomClr(`${color}`));
    }
    else {
        color.style.backgroundColor = `${color.id}`
        color.addEventListener('click',(e)=>chngClr(`${e.currentTarget.id}`));
    }
});