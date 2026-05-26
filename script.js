let cursor = document.querySelector('.cursor');
let timeout;
window.addEventListener("mousemove", (e) =>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.transform = "translate(10%, 10%) scale(0.95)";
    clearTimeout(timeout);
    timeout = setTimeout(() =>{
        cursor.style.transform = "translate(10%, 10%) scale(1)";
    }, 500);
});

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