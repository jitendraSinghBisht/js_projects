let pl=0;
let count=0;
var p1,p2;
let ar={1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""};
let a=["_","td1","td2","td3","td4","td5","td6","td7","td8","td9"];
const doc=document.querySelectorAll(".button");
let winbox = document.querySelector(".winbox");
const players = document.querySelectorAll('.usersin input');

document.querySelector(".usersin button").addEventListener('click',(e)=>{
    p1=players[0].value;
    p2=players[1].value;
    if(p1!="" && p2!="" && p1!=null && p2!=null ){
        e.target.parentElement.style.height = '0';
        console.log(p1,p2,e.target.parentElement)
    }
});

doc.forEach((dc,i)=> {
    dc.addEventListener('click',clk)
})

async function clk(e){
    e.stopPropagation()
    let pos = parseInt((e.target.id).slice(2))
    count+=1;
    let txt=(pl==0)?"threads":"twitter";
    await stop_button(pos,0);
    document.getElementById(a[pos]).style.backgroundImage = `url("../assets/images/${txt}.png")`;
    ar[pos]=(pl==0)?1:2;
    if (count>4) check();
    pl=(pl+1)%2;
}

function stop_button(pos,flag){ 
    doc[pos-1].removeEventListener("click",clk)
    if (count==9 || flag==1) for (let i=0;i<doc.length;i++) doc[i].removeEventListener("click",clk);
}

function check(){
    if(ar[1]==pl+1 && ar[2]==pl+1 && ar[3]==pl+1){
        setTimeout(function(){result("win")},100);
    } else if(ar[4]==pl+1 && ar[5]==pl+1 && ar[6]==pl+1){
        setTimeout(function(){result("win")},100);
    } else if(ar[7]==pl+1 && ar[8]==pl+1 && ar[9]==pl+1){
        setTimeout(function(){result("win")},100);
    } else if(ar[1]==pl+1 && ar[4]==pl+1 && ar[7]==pl+1){
        setTimeout(function(){result("win")},100);
    } else if(ar[2]==pl+1 && ar[5]==pl+1 && ar[8]==pl+1){
        setTimeout(function(){result("win")},100);
    } else if(ar[3]==pl+1 && ar[6]==pl+1 && ar[9]==pl+1){
        setTimeout(function(){result("win")},100);
    } else if(ar[1]==pl+1 && ar[5]==pl+1 && ar[9]==pl+1){
        setTimeout(function(){result("win")},100);
    } else if(ar[3]==pl+1 && ar[5]==pl+1 && ar[7]==pl+1){
        setTimeout(function(){result("win")},100);
    } else if(count==9){
        setTimeout(function(){result("draw")},100);
    }
}

function result(res){
    stop_button(1,1);
    let st;
    if(res=="win"){
        st=(pl==0?p1:p2)+" Won!!!\nStart a new game??";
    } else {
        st="Match Draw....\nStart a new game??";
    }
    winbox.style.height = 'Inherit';
    winbox.children[0].innerText = st;
    document.querySelector(".winbox button").addEventListener('click',reset);
}

function reset(e){
    pl=0;
    count=0;
    ar={1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""};
    a=["_","td1","td2","td3","td4","td5","td6","td7","td8","td9"];
    doc.forEach((dc,i)=> {
        dc.addEventListener('click',clk)
        dc.style.backgroundImage = 'none';
    })
    e.target.parentElement.style.height = '0';
}
