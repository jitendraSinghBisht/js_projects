const divImgs = document.querySelectorAll('.images')

const bgImgLnk = ['https://images.pexels.com/photos/4894421/pexels-photo-4894421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1546863/nature-milky-way-galaxy-constellations-1546863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/5418830/pexels-photo-5418830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

divImgs.forEach((div,i)=>div.style.backgroundImage = `url(${bgImgLnk[i]})`);

divImgs.forEach((div)=>div.addEventListener('click',(e)=>(console.log(e))));