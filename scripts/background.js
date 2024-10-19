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
        console.log(`Access to ${currentUrl} is restricted.`);
        // You can implement further actions here, such as blocking the tab or showing a notification
        OnBreakCheck()
    } 
}