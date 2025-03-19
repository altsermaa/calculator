let ms = 0; 
    seconds = 0; 
    minutes = 0;

let timer;

const display = document.getElementById("display"); 
const lapBtn = document.getElementById("lap");
const startBtn = document.getElementById("start");
const lapList = document.getElementById("lapList") 

startBtn.addEventListener("click", () => {
    if(startBtn.textContent === "Start") {
        startBtn.textContent = "Stop"; 
        startBtn.classList.add("stop");
        lapBtn.textContent = "Lap"; 
        startTimer(); 
    } else {
        startBtn.textContent = "Start"; 
        startBtn.classList.remove("stop");
        lapBtn.textContent = "Reset"; 
        stopTimer();
    }
});


const startTimer = () => {
    timer = setInterval(() => {
        ms++;
        if (ms === 60) {
            seconds ++;
            ms = 0;
        } if (seconds === 60) {
            minutes ++; 
            seconds = 0;
        }
        displayTime();
    }, 10)
};

const stopTimer = () => {
    clearInterval(timer);
};

const formatTime = (num) => {
    return num.toString().padStart(2, "0");
}

const displayTime = () => {
    display.innerText =`${formatTime(minutes)} : ${formatTime(seconds)} : ${formatTime(ms)}`
};


lapBtn.addEventListener("click", () => {
    if(lapBtn.textContent === "Reset") {
        ms = 0;
        seconds = 0;
        minutes = 0;
        lapList.innerHTML = "";
        displayTime();
    } if(lapBtn.textContent === "Lap") {
            const lapItem = `
                <div id="lapTime">
                    <span>Lap</span>
                    <span>${formatTime(minutes)} : ${formatTime(seconds)} : ${formatTime(ms)}</span>
                </div>`
            lapList.innerHTML += lapItem;
            displayTime();
    }
})



