let count = document.querySelector('.count');
let subtract = document.querySelector('.subtract');
let add = document.querySelector('.add');
let reset = document.querySelector('.reset');

subtract.addEventListener('click',()=>{
    count.innerHTML--;
})
add.addEventListener('click',()=>{
    count.innerHTML++;
})
reset.addEventListener('click',()=>{
    count.innerHTML = 0;
})