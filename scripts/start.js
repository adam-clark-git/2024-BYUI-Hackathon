document.getElementById('start-btn').addEventListener('click', function () {
    // Get values from input fields
    const workTime = parseInt(document.getElementById('work-time').value) * 60; // convert to seconds
    const numberOfBreaks = parseInt(document.getElementById('breaks').value);
    const breakLength = parseInt(document.getElementById('break-length').value) * 60; // convert to seconds

    // Validate inputs
    if (workTime <= 0 || numberOfBreaks < 0 || breakLength <= 0) {
        alert('Please enter valid values for all fields.');
        return;
    }


    chrome.runtime.sendMessage({
        type: 'startWorkSession',
        workTime: workTime,
        numberOfBreaks: numberOfBreaks,
        breakLength: breakLength
    });

    window.close();

});


/*



// Should run whenever user selects to go on a break
function IsOnBreak() {
    //checks if there are no more breaks
    if (currentWorkTime != null) {
        currentWorkTime.pause();
    }
    if (checkNumBreaksIsZero) {
        return
    }
    // checks if there was a timer already running
    if (breakTimer != null) {
        breakTimer.resume();
        return
    }
    // starts a new timer
    var breakTimer = new Timer(function () {
        alert("Break Over");
        currentBreaksLeft += -1;
        breakTimer = null;
    }, 1000 * (breakLength / 60))
}

// starts the work time and pauses? the break timer i think that needs to change
function returnToWork() {
    if (breakTimer != null) {
        breakTimer.pause();
    }
    currentWorkTime.resume();
}


function ShutOff() {

}

*/



chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        urlChecker(tab.url);
    }
});


