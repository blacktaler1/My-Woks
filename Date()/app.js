const data = document.getElementById('full-day')
const now = new Date()
const hour =document.getElementById('hour')
const minute =document.getElementById('minute')
data.innerText = `${now.getDate()}. 0${now.getMonth() + 1 }. ${now.getFullYear()}` 
hour.innerText = now.getHours();
minute.innerText = now.getMinutes();
const updateClock  = () => {
    const second =document.getElementById('second')
    second.innerText = now.getSeconds();
};
updateClock();
const intervalId = setInterval(updateClock, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval to'xtatildi.");
}, 60000);