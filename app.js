console.log(`worked`);

let cube = document.querySelector(".cube");

let sideFront = document.createElement('div');
let nodeSideFront = document.createTextNode(`Front`);
sideFront.appendChild(nodeSideFront);
sideFront.classList.add(`side`);
sideFront.classList.add(`front`);
cube.appendChild(sideFront);

let sideBack = document.createElement('div');
let nodeSideBack = document.createTextNode(`Back`);
sideBack.appendChild(nodeSideBack);
sideBack.classList.add(`side`);
sideBack.classList.add(`back`);
cube.appendChild(sideBack);

let sideLeft = document.createElement('div');
let nodeSideLeft = document.createTextNode(`Left`);
sideLeft.appendChild(nodeSideLeft);
sideLeft.classList.add(`side`);
sideLeft.classList.add(`left`);
cube.appendChild(sideLeft);

let sideRight = document.createElement('div');
let nodeSideRight = document.createTextNode(`Right`);
sideRight.appendChild(nodeSideRight);
sideRight.classList.add(`side`);
sideRight.classList.add(`right`);
cube.appendChild(sideRight);

let sideTop = document.createElement('div');
let nodeSideTop = document.createTextNode(`Top`);
sideTop.appendChild(nodeSideTop);
sideTop.classList.add(`side`);
sideTop.classList.add(`top`);
cube.appendChild(sideTop);

let sideBottom = document.createElement('div');
let nodeSideBottom = document.createTextNode(`Bottom`);
sideBottom.appendChild(nodeSideBottom);
sideBottom.classList.add(`side`);
sideBottom.classList.add(`bottom`);
cube.appendChild(sideBottom);

let x = 0, y = 0;

document.addEventListener('keydown', function(ev){
    
    //курсор <
    if(ev.keyCode == 37) y -= 5;
    //курсор >
    if(ev.keyCode == 39) y += 5;
    //курсор ^
    if(ev.keyCode == 38) x += 5;
    //курсор V
    if(ev.keyCode == 40) x -= 5;
 
 document.querySelector('.cube').style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

});