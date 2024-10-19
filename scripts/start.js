document.getElementById('start-btn').addEventListener('click', function () {
    // Get values from input fields
    const workTime = parseInt(document.getElementById('work-time').value);
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


chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        urlChecker(tab.url);
    }
});
