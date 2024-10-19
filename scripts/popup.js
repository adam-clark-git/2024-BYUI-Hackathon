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

    // Calculate time intervals
    let currentWorkTime;
    let currentBreaksLeft = numberOfBreaks;
    let breakTimer;

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
        if (checkNumBreaksIsZero) {
            return
        }
        // checks if there was a timer already running
        if (breakTimer != null) {
            breakTimer.resume();
            return
        }
        // starts a new timer
        var breakTimer = new Timer(function() {
            alert("Break Over");
            currentBreaksLeft += -1;
            breakTimer = null;
        }, 1000 * (breakLength / 60))
    }
    
    // Should trigger every time user switches to a productive website.
    function returnToWork() {
        if (breakTimer != null) {
            breakTimer.pause();
        }
    }
    function checkNumBreaksIsZero() {
        if (currentBreaksLeft <= 0 && numberOfBreaks != 1) {
            alert("NO MORE BREAKS :(");
            return true;
        }
    }
    function ShutOff() {
        // ask user to start a new work session
    }
    // Function to start work session
    function startWorkSession() {
        alert('Work session started! Stay focused.');
        var currentWorkTime = new Timer(function() {
            alert("Work is done!");
            ShutOff();
        }, 1000 * workTime)

        // testing code, delete later
        OnBreakCheck()
    }
    // Start the work session
    startWorkSession();
});





var Timer = function(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
    };

    this.resume = function() {
        if (timerId) {
            return;
        }

        start = Date.now();
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};