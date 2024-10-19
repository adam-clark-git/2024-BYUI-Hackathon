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



// // TEMP FOR TESTING get the real list from options
// const urlsList = [
//     "https://www.coolmathgames.com/",
//     "https://www.other.com",
//     "https://www.youtube.com/*"
// ];
/*

let currentWorkTime;
let currentBreaksLeft = numberOfBreaks;
let breakTimer;




// Should run whenever a user goes to a flagged website
function OnBreakCheck() {
    var OnBreak = prompt("Are you on break? (Yes/No)", "No")
    if (OnBreak == "No" || OnBreak == "no")
        alert("Best get back to work")
    else {
        alert("ahhh");
        IsOnBreak();
    }
}



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

// check if break count is zero
function checkNumBreaksIsZero() {
    if (currentBreaksLeft <= 0 && numberOfBreaks != 1) {
        alert("NO MORE BREAKS :(");
        return true;
    }
    return false
}
function ShutOff() {

}

startWorkSession()
*/



chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        urlChecker(tab.url);
    }
});


