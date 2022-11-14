"user strict";
{
  const flash=document.querySelector(".flash")

  const images = [
  "img/flake00.png",
  "img/flake01.png",
  "img/flake02.png",
  "img/flake03.png",
  ];

  const lifeBar = document.getElementById("life-bar")
  const lifeMark =document.getElementById("life-mark")
  const lifeProg =document.getElementById("life-text2")

  const vitBar= document.getElementById("vit-bar")
  const vitMark= document.getElementById("vit-mark")
  const vitProg =document.getElementById("vit-text2")


  const resBar= document.getElementById("res-bar")
  const resMark= document.getElementById("res-mark")
  const resProg =document.getElementById("res-text2")


  const comBar= document.getElementById("com-bar")
  const comMark= document.getElementById("com-mark")
  const comProg =document.getElementById("com-text2")


  const flake=document.getElementById("flake")


  let life = 100
  lifeBar.style.width="100%"
  
  let vit = 100
  vitBar.style.width="100%"
  
  let res = 100
  resBar.style.width="100%"
  
  let com = 0
  comBar.style.width="0%"


  let currentIndex=0
  flake.src = images[currentIndex];

  flake.addEventListener('click',()=> {
    com += 3
    if(com>100){com=100}
    comProg.textContent = `${com}/100`;
    comBar.style.width= com+"%";

    if(com <33){currentIndex=0}
    if(com >=33&&com<66){currentIndex=1}
    if(com >=66&&com<100){currentIndex=2}
    if(com >=100){currentIndex=3}
    
    flake.src = images[currentIndex];

    life-=0.2
    if(life<0){life=0}
    if(life>100){life=100}
    lifeProg.textContent = `${Math.floor(life)}/100`;
    lifeBar.style.width= life+"%"
    if(com>=100){
      flash.classList.add("is-active")
      
     
      setTimeout(() => {vit-=10;
        if(vit<0){vit=0};
        vitProg.textContent = `${Math.floor(vit)}/100`;
        vitBar.style.width= vit+"%";
      }, 1000);
      setTimeout(() => {vit-=8;
        if(vit<0){vit=0};
        vitProg.textContent = `${Math.floor(vit)}/100`;
        vitBar.style.width= vit+"%";
      }, 2000);
      setTimeout(() => {vit-=5;
        if(vit<0){vit=0};
        vitProg.textContent = `${Math.floor(vit)}/100`;
        vitBar.style.width= vit+"%";
      }, 3000); 
      setTimeout(() => {
        flash.classList.remove("is-active");
        res-=20;
        resProg.textContent = `${Math.floor(res)}/100`;
        resBar.style.width= res+"%";
        com=0;
        currentIndex=1;
        flake.src = images[currentIndex];
        comProg.textContent = `${com}/100`;
        comBar.style.width= com+"%";

      }, 3500);
    }
  
  })

  
}