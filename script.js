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
