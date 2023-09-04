class AppleWatch {
    constructor() {
        setInterval(this.doTime, 0, this.dynamicTime);
        setInterval(this.doDate, 0, this.dynamicDate);
    }
    dynamicTime = document.querySelector('.container .watch');

    doTime(dynamicTime) {
        const time = new Date();
        dynamicTime.innerHTML = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    }

    dynamicDate = document.querySelector('.container .year');

    doDate(dynamicDate) {
        const date = new Date();
        dynamicDate.innerHTML = date.toDateString();
    }
}

const appleWatch = new AppleWatch();
