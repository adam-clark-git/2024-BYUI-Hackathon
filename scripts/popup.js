document.getElementById('start-btn').addEventListener('click', function () {
    // Get values from input fields
    const workTime = parseInt(document.getElementById('work-time').value) * 60; // convert to seconds
    const numberOfBreaks = parseInt(document.getElementById('breaks').value);
    const breakLength = parseInt(document.getElementById('break-length').value) * 60; // convert to seconds

    console.log(`Work time set to: ${workTime / 60} minutes`);
    console.log(`Number of breaks set to: ${numberOfBreaks}`);
    console.log(`Break length set to: ${breakLength / 60} minutes`);

    // Validate inputs
    if (workTime <= 0 || numberOfBreaks < 0 || breakLength <= 0) {
        alert('Please enter valid values for all fields.');
        return;
    }

    // Calculate time intervals
    const breakIntervals = (workTime / (numberOfBreaks + 1)); // Time between breaks

    var currentWorkTime = new Timer();
    let currentBreaksLeft = numberOfBreaks;
    let breakTimer;

    function OnBreakCheck() {
        var OnBreak = prompt("Are you on break? (Yes/No)", "No")
        if (OnBreak == "No" || OnBreak == "no")
            alert("Best get back to work")
        else {
            if (!checkNumBreaksIsZero()) {
                if (breakTimer != null) {
                    breakTimer.resume();
                }
                var breakTimer = new Timer(function() {
                    alert("Break Over")
                    currentBreaksLeft += -1
                    breakTimer = null;
                }, 1000 * (breakLength / 60))
            }
            
        }
            
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
    function handleBreaks() {
        for (let i = 1; i <= numberOfBreaks; i++) {
            setTimeout(function () {
                alert(`Break ${i} started! Take a ${breakLength / 60} minute break.`);

                // End the break after breakLength
                setTimeout(function () {
                    alert(`Break ${i} ended! Back to work.`);
                }, breakLength * 1000);

            }, breakIntervals * i * 1000); // Delay for break intervals
        }

        // End of work session after total work time
        setTimeout(function () {
            alert('Work session completed! Great job!');
        }, workTime * 1000);
    }

    // Start the work session
    startWorkSession();
});
