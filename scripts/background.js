
chrome.runtime.onMessage.addListener((request) => {
    if (request.type === 'startWorkSession') {
        const { workTime, numberOfBreaks, breakLength } = request;
        startWorkSession(workTime, numberOfBreaks, breakLength);
    }



    function startWorkSession(workTime, numberOfBreaks, breakLength) {

        alert('Work session started! Stay focused.');
        //chrome.action.setPopup({ popup: 'running.html' });
        //window.close();
        // Send workTime, numberOfBreaks, and breakLength to serviceWorker.
        

    },
});