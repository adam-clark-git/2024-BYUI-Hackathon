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
    const breakIntervals = (workTime / (numberOfBreaks + 1)); // Time between breaks

    let currentWorkTime = 0;
    let currentBreaksLeft = numberOfBreaks;
    let breakTimer;

    function OnBreakCheck() {
        var OnBreak = prompt("Are you on break? (Yes/No)", "No")
        if (OnBreak == "No" || OnBreak == "no")
            alert("Best get back to work")
        else {
            if (!checkNumBreaksIsZero()) {
                breakTimer = setTimeout(function() {
                    alert("Break Over")
                    currentBreaksLeft += -1
                }, 1000 * (breakLength / 60))
            }
            
        }
            
    }
    function returnToWork() {
        if (breakTimer != null) {
            breakTimer.clearInteval();
            currentBreaksLeft += -1;
        }
        checkNumBreaksIsZero();
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
