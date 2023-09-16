const numberElement = document.getElementById('number');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
let intervalId;

function updateNumber() {
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    numberElement.textContent = randomNumber;
}

startButton.addEventListener('click', () => {
    intervalId = setInterval(updateNumber, 100);
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
});

// Initially disable the "Detener" button
stopButton.disabled = true;
