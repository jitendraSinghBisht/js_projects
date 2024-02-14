document.addEventListener('keydown',(e)=>keyPressed(e));

function keyPressed(e){
    console.log(e.code);
    const num = document.querySelector(`.${e.code.toLowerCase()}`);
    num.style.transform="scale(0.5)";
    num.classList.add("key2");
    setTimeout(()=>{
        num.style.transform="scale(1)";
        num.classList.remove("key2");
    },1000);
}
