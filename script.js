let cursor = document.querySelector('.cursor');
let heroSection = document.querySelector('.hero');
let header = document.querySelector('header');
let timeout;
heroSection.addEventListener("mousemove", (e) =>{   
    mouseMove(e);
    landingMouseMoveAnimation();
});
header.addEventListener("mousemove", (e) =>{
    mouseMove(e);
    landingMouseMoveAnimation();
});

function landingMouseMoveAnimation(){
    cursor.style.transform = "translate(5%, 5%) scale(0.95)";
    clearTimeout(timeout);
    timeout = setTimeout(() =>{
        cursor.style.transform = "translate(5%, 5%) scale(1)";
    }, 500);
}

function mouseMove(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

let whatsappButton = document.querySelector('.whatsapp-button');
let whatsappCard = document.querySelector('.whatsapp-card');
let whatsappCloseButton = document.querySelector('.whatsapp-card-close-button');
let flag = true;
whatsappButton.addEventListener('click',()=>{
    if(flag == true){
        whatsappCard.style.display = "block";
        flag = false;
    }
    else{
        whatsappCard.style.display = "none";
        flag = true;
    }

});

whatsappCloseButton.addEventListener('click',()=>{
    whatsappCard.style.display = "none";
    flag = true;
});

let landingVideo = document.querySelector('.landing-video');
    timeout = setTimeout(()=>{
        landingVideo.style.display = "none";
    }, 7500);