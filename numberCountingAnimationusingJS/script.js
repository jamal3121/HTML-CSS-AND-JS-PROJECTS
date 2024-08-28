let valueDisplays = document.querySelectorAll(".num")
let interval = 3000;

// console.log(valueDisplays);
valueDisplays.forEach(valueDisplay=>{
    let startValue = 0;
    let endvalue = parseInt(valueDisplay.getAttribute("dala-val"));

    let duration = Math.floor(interval/endvalue);
    let counter = setInterval(() => {
        startValue +=1;
        valueDisplay.textContent = startValue;
        if(startValue == endvalue){
            clearInterval(counter);
        }
    }, duration);
})