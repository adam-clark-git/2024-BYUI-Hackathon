chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        urlChecker(tab.url);
    }
});

// TEMP FOR TESTING get the real list from options
const urlsList = [
    "https://www.coolmathgames.com/",
    "https://www.other.com",
    "https://www.youtube.com/*"
];

const urlList = chrome.storage.sync.get(['websiteList'], function(result){
    if (result.websiteList) {
        console.log('Website list retrieved:', result.websiteList);
    }
    else {
        console.log('gg we are cooked')
    }
})

// Listen for alarms
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'workSession') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'Images/FMLogo128x128.png',  // Add your extension's icon here
            title: 'Work Session Completed',
            message: 'Good job! Your work session is over!',
            priority: 2
        });
    } else if (alarm.name.startsWith('break_')) {
        const breakNumber = alarm.name.split('_')[1];
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'Images/FMLogo128x128.png',
            title: `Break ${breakNumber}`,
            message: `It's time for a break! Take a rest.`,
            priority: 2
        });
    }
});


chrome.runtime.onMessage.addListener((request) => {
    if (request.type === 'startWorkSession') {
        const { workTime, numberOfBreaks, breakLength } = request;
        startWorkSession(workTime, numberOfBreaks, breakLength);
    }



        function startWorkSession(workTime, numberOfBreaks, breakLength) {

            alert('Work session started! Stay focused.');

            chrome.alarms.clearAll();


            chrome.alarms.create('workSession', { delayInMinutes: workTime });



            // const breakInterval = workTime / (numberOfBreaks + 1);

            // for (let i = 1; i <= numberOfBreaks; i++) {
            //     chrome.alarms.create(`break_${i}`, { delayInMinutes: breakInterval * i });
            // }


            //chrome.action.setPopup({ popup: 'running.html' });
            //window.close();
            // Send workTime, numberOfBreaks, and breakLength to serviceWorker.

        };
    }
);
;



function startWorkSession(workTime, numberOfBreaks, breakLength) {

    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'Images/FMLogo128x128.png',  // Ensure you have an icon.png in your extension
        title: 'Work Session Started',
        message: 'Stay focused!',
        priority: 2
    });



    chrome.alarms.clearAll();


    chrome.alarms.create('workSession', { delayInMinutes: workTime });


    chrome.action.setPopup({ popup: 'running.html' });
    //window.close();
    // Send workTime, numberOfBreaks, and breakLength to serviceWorker.
}


function urlChecker(currentUrl) {

    const lowerCurrentUrl = currentUrl.toLowerCase();
    const lowerUrlsList = urlsList.toLowerCase();

    const match = lowerUrlsList.some(urlsList => lowerCurrentUrl.includes(urlsList));

    if (match) {
        OnBreakCheck()
    }
}

function OnBreakCheck() {
    var OnBreak = prompt("Are you on break? (Yes/No)", "No")
    if (OnBreak == "No" || OnBreak == "no")
        alert("Best get back to work")
    else {
        alert("Have Fun ");
        IsOnBreak();
    }
}


// check if break count is zero
function checkNumBreaksIsZero() {
    if (currentBreaksLeft <= 0 && numberOfBreaks != 1) {
        alert("Sorry you have no more breaks:");
        return true;
    }
    return false
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


function ShutOff() {

}