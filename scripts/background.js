// TEMP FOR TESTING get the real list for options
const urlsList = [
    "https://www.coolmath.com",
    "https://www.other.com"
];

chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        urlChecker(tab.url);
    }
});


function urlChecker(currentUrl) {
    const match = restrictedUrls.some(urlsList => currentUrl.includes(urlsList));

    if (match) {
        OnBreakCheck()
    } 
}