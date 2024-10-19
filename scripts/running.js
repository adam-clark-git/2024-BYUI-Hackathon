chrome.runtime.onMessage.addListener((request) => {
    if (request.type === 'startRunning') {
        startTimer(request.workTime * 60); // Start the timer with work time in seconds
    }
});


function startTimer(duration) {
    const timerElement = document.getElementById('timer');
    let time = duration; // Initialize time with the duration in seconds

    // Create an interval that updates the timer display every second
    const interval = setInterval(() => {
        if (time > 0) {
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = time % 60;

            // Update the timer display
            timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

            time--; // Decrease the time by 1 second
        } else {
            clearInterval(interval); // Clear the interval when time is up
            timerElement.textContent = "Work session completed!";
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'Images/FMLogo128x128.png',
                title: 'Work Session Completed',
                message: 'Good job! Your work session is over!',
                priority: 2
            });
        }
    }, 1000); // Update every second
}

// Add leading zeroes to time units
function pad(num) {
    return num < 10 ? '0' + num : num;
}
