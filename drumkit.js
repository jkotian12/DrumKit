const keys = document.querySelectorAll(".keys");
const music = document.querySelectorAll("audio");
document.addEventListener("keydown", e=>{
    if(e.key==="a"){
        keys[0].classList.toggle("play");  
        music[0].play();
        music[0].currentTime =0;
    }
    if(e.key==="s"){
        keys[1].classList.toggle("play");  
        music[1].currentTime =0;
        music[1].play();
    }
    if(e.key==="d"){
        keys[2].classList.toggle("play");   
        music[2].currentTime =0;
        music[2].play();
    }
    if(e.key==="f"){
        keys[3].classList.toggle("play");  
        music[3].currentTime =0;
        music[3].play();
    }
    if(e.key==="g"){
        keys[4].classList.toggle("play"); 
        music[4].currentTime =0;
        music[4].play(); 
    }
    if(e.key==="h"){
        keys[5].classList.toggle("play"); 
        music[5].currentTime =0;
        music[5].play(); 
    }
    if(e.key==="j"){
        keys[6].classList.toggle("play");  
        music[6].currentTime =0;
        music[6].play();
    }
    if(e.key==="k"){
        keys[7].classList.toggle("play");  
        music[7].currentTime =0;
        music[7].play();
    }
    if(e.key==="l"){
        keys[8].classList.toggle("play");  
        music[8].currentTime =0;
        music[8].play();
    }
})
document.addEventListener("keyup",e=>{
    if(e.key==="a"){
        keys[0].classList.toggle("play");  
       
    }
    if(e.key==="s"){
        keys[1].classList.toggle("play");  
    }
    if(e.key==="d"){
        keys[2].classList.toggle("play");   
    }
    if(e.key==="f"){
        keys[3].classList.toggle("play");  
    }
    if(e.key==="g"){
        keys[4].classList.toggle("play");  
    }
    if(e.key==="h"){
        keys[5].classList.toggle("play");  
    }
    if(e.key==="j"){
        keys[6].classList.toggle("play");  
    }
    if(e.key==="k"){
        keys[7].classList.toggle("play");  
    }
    if(e.key==="l"){
        keys[8].classList.toggle("play");  
    }
})
