chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

// TEMP FOR TESTING get the real list from options
const urlsList = [
    "https://www.coolmathgames.com/",
    "https://www.other.com",
    "https://www.youtube.com/*"
];



// Listen for alarms
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'workSession') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',  // Add your extension's icon here
            title: 'Work Session Completed',
            message: 'Good job! Your work session is over!',
            priority: 2
        });
    } else if (alarm.name.startsWith('break_')) {
        const breakNumber = alarm.name.split('_')[1];
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
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
});


function OnBreakCheck() {
    var OnBreak = prompt("Are you on break? (Yes/No)", "No")
    if (OnBreak == "No" || OnBreak == "no")
        alert("Best get back to work")
    else {
        alert("ahhh");
        IsOnBreak();
    }
}


// check if break count is zero
function checkNumBreaksIsZero() {
    if (currentBreaksLeft <= 0 && numberOfBreaks != 1) {
        alert("NO MORE BREAKS :(");
        return true;
    }
    return false
}