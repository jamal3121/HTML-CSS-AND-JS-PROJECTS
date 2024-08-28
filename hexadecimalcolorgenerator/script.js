const rand = Math.floor(Math.random()*100);
let number = document.querySelector('.number');
let btn = document.querySelector('.generate');

btn.addEventListener('click',()=>{
    number.innerHTML = rand
})