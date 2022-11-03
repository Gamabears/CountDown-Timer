const newYears = '1 jan 2023'


function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const seconds = (newYearsDate-currentDate) /1000

    const days = Math.floor(seconds / 3600 / 24)
    const hours = Math.floor(seconds/3600) %24

    const minutes = Math.floor(seconds/60) %60
    const second = Math.floor(seconds)%60

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('mins').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(second);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();
setInterval(countdown, 1000);

