alert(`This page is not responsive.\nPlease view this page in 1920×768 resolution.\nWill improve in near future sorry for inconvineance.\n\nThank You....`);

function getTime() {
    let d=new Date()
    setTime(d.getSeconds(),'sec')
    setTime(d.getMinutes(),'min')
    setTime(d.getHours(),'hr')
}

function setTime(ch,id){
    ch+='';
    if (ch.length != 2) ch = '0'+ ch;
    document.querySelector(`#${id}0`).className=`num num${ch[0]}`;
    document.querySelector(`#${id}1`).className=`num num${ch[1]}`;
}


setInterval(getTime, 1000);
getTime();
