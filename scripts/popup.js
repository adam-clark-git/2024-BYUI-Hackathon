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


    function startBackground()
    {
        chrome.action.setPopup({popup: 'running.html'});
        window.close();
        startWorkSession(workTime);
        panic();
        
    }
    function testAfter() {
        panic();
        for (let i = 0; i < 5; i++) {
            setTimeout(panic(), 5000)
        }
    }
    function panic() {
        alert("ahh");
    }

    // Start the work session
    startBackground();
    testAfter();
}); 
