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
        chrome.runtime.sendMessage({ action: "OnBreakCheck"})
        // OnBreakCheck()
    } 
}

