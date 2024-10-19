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
    var currentWorkTime = new Timer();
    let currentBreaksLeft = numberOfBreaks;
    let breakTimer;

    chrome.runtime.onMessage.addListener((request) => {
        if (request.action === "OnBreakCheck") {
            OnBreakCheck();
        }
    });



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

        if (breakTimer != null) {
            breakTimer.resume();
        }
        var breakTimer = new Timer(function() {
            alert("Break Over")
            currentBreaksLeft += -1
            BreakTimer = null;
        }, 1000 * (breakLength / 60))
    }
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
    function returnToWork() {
        if (breakTimer != null) {
            breakTimer.pause();
        }
    }
    function checkNumBreaksIsZero() {
        if (currentBreaksLeft <= 0) {
            alert("NO MORE BREAKS :(");
            return false;
        }
    }

    // Function to start work session
    function startWorkSession() {
        alert('Work session started! Stay focused. I WILL DESTROY YOU');
        OnBreakCheck()
        //handleBreaks();
    }

    // Function to handle breaks at intervals
    // Start the work session
    startWorkSession();
});
