chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        urlChecker(tab.url);
    }
});

// TEMP FOR TESTING get the real list from options
// const urlsList = [
//     "https://www.coolmathgames.com/",
//     "https://www.other.com",
//     "https://www.youtube.com/*"
// ];






const urlList = chrome.storage.sync.get(['websiteList'], function (result) {
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
            iconUrl: 'Images/FMLogo16x16.png',
            title: 'Work Session Completed',
            message: 'Good job! Your work session is over!',
            priority: 2
        });
    } else if (alarm.name.startsWith('break_')) {
        const breakNumber = alarm.name.split('_')[1];
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'Images/FMLogo16x16.png',
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


        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'Images/FMLogo16x16.png',  // Ensure you have an icon.png in your extension
            title: 'Work Session Started',
            message: 'Stay focused!',
            priority: 2
        });



        // const breakInterval = workTime / (numberOfBreaks + 1);

        // for (let i = 1; i <= numberOfBreaks; i++) {
        //     chrome.alarms.create(`break_${i}`, { delayInMinutes: breakInterval * i });
        // }


        //chrome.action.setPopup({ popup: 'running.html' });
        //window.close();
        // Send workTime, numberOfBreaks, and breakLength to serviceWorker.

<<<<<<< HEAD

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
);




function startWorkSession(workTime, numberOfBreaks, breakLength) {

    alert('Work session started! Stay focused.');
    //chrome.action.setPopup({ popup: 'running.html' });
    //window.close();
    // Send workTime, numberOfBreaks, and breakLength to serviceWorker.


}
});