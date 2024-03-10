var pl=0;
var count=0;
const ar={1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""};
var a=["_","td1","td2","td3","td4","td5","td6","td7","td8","td9"];
let doc=document.querySelectorAll(".button");

doc.forEach((dc,i)=> {
    let idx = { pos: i+1};
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
    if(res=="win"){
        let st="Player"+(pl+1)+" Won!!!\nStart a new game??";
        if(confirm(st)) location.reload(true);
    } else {
        if(confirm("Match Draw....\nStart a new game??")) location.reload(true);
    }
}
