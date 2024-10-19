// TEMP FOR TESTING get the real list from options
const urlsList = [
    "https://www.coolmathgames.com/",
    "https://www.other.com",
    "https://www.youtube.com/*"
];

chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        urlChecker(tab.url);
    }
});


function urlChecker(currentUrl) {

    const lowerCurrentUrl = currentUrl.toLowerCase();
    const lowerUrlsList = urlsList.toLowerCase();

    const match = lowerUrlsList.some(urlsList => lowerCurrentUrl.includes(urlsList));

    if (match) {

        OnBreakCheck()
    }
}


// Should run whenever a user goes to a flagged website
function OnBreakCheck() {
    var OnBreak = prompt("Are you on break? (Yes/No)", "No")
    if (OnBreak == "No" || OnBreak == "no")
        alert("Best get back to work")
    else {
        IsOnBreak()
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
}


var Timer = function (callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function () {
        window.clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
    };

    this.resume = function () {
        if (timerId) {
            return;
        }

        start = Date.now();
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};