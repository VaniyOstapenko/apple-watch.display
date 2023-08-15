

const dynamicTime = document.querySelector('.container .watch');

function doTime(dynamicTime) {
    const time = new Date();
    dynamicTime.innerHTML = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
}

setTimeout(doTime, 0, dynamicTime);
setInterval(doTime, 1000, dynamicTime);

const dynamicDate = document.querySelector('.container .year');

function doDate(dynamicDate) {
    const date = new Date();
    dynamicDate.innerHTML = date.toDateString();
}

setInterval(doDate, 0, dynamicDate);