
// let hour = document.getElementById('hour');
// let second = document.getElementById('second');
// let minute = document.getElementById('minute');

setInterval(() => {
    d= new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    hrotation = 30*hTime + mTime/2;
    mrotation = 6*mTime;
    srotation = 6*sTime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    // console.log(hrotation);
    // console.log(mrotation);
    // console.log(srotation);


}, 1000);