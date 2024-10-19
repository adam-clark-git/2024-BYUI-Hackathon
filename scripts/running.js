document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the work session data from Chrome storage
    chrome.storage.local.get(['workSessionStartTime', 'workSessionDuration'], function (result) {
        if (result.workSessionStartTime && result.workSessionDuration) {
            const startTime = result.workSessionStartTime;
            const duration = result.workSessionDuration;

            // Calculate the remaining time
            const currentTime = Date.now();
            const timeElapsed = currentTime - startTime;
            let timeRemaining = duration - timeElapsed;

            if (timeRemaining > 0) {
                startTimer(timeRemaining / 1000);  // Convert to seconds
            } else {
                document.getElementById('timer').innerText = "Work session completed!";
            }
        } else {
            document.getElementById('timer').innerText = "No active session!";
        }
    });
});

function startTimer(duration) {
    const timerElement = document.getElementById('timer');
    let time = duration;

    const interval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);

        // Update the timer display
        timerElement.innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (time <= 0) {
            clearInterval(interval);
            timerElement.innerText = "Work session completed!";
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'Images/FMLogo128x128.png',
                title: 'Work Session Completed',
                message: 'Good job! Your work session is over!',
                priority: 2
            });
        }

        time -= 1;  // Decrease time by 1 second
    }, 1000);  // Update every second
}
