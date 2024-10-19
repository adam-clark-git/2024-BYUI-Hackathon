// document.getElementById('start-btn').addEventListener('click', function () {
//     // Get values from input fields
//     const workTime = parseInt(document.getElementById('work-time').value) * 60; // convert to seconds
//     const numberOfBreaks = parseInt(document.getElementById('breaks').value);
//     const breakLength = parseInt(document.getElementById('break-length').value) * 60; // convert to seconds

//     // Validate inputs
//     if (workTime <= 0 || numberOfBreaks < 0 || breakLength <= 0) {
//         alert('Please enter valid values for all fields.');
//         return;
//     }


//     function startBackground() {
//         chrome.action.setPopup({ popup: 'hello.html' });

//         let workTime = parseInt(document.getElementById('work-time').value) * 60;

//         startWorkSession(workTime);

//     }



// document.addEventListener('DOMContentLoaded', function () {
//     // Ensure the popup HTML is loaded before attempting to set anything
//     chrome.action.setPopup({ popup: 'hello.html' });

//     // Add a listener for the start button
//     document.getElementById('start-btn').addEventListener('click', function () {
//         let workTime = parseInt(document.getElementById('work-time').value) * 60;

//         if (!isNaN(workTime) && workTime > 0) {
//             startWorkSession(workTime);
//         } else {
//             console.error("Invalid work time value");
//         }
//     });
// });

// function startWorkSession(workTime) {
//     console.log('Work session started for:', workTime, 'seconds');
//     // Add your work session logic here
// }


//     // Start the background session
//     startBackground();
// }); 



document.addEventListener('DOMContentLoaded', function () {
    // Ensure the popup HTML is loaded before attempting to set anything
    chrome.action.setPopup({ popup: 'hello.html' });

    // Add a listener for the start button
    document.getElementById('start-btn').addEventListener('click', function () {
        // Get values from input fields
        const workTime = parseInt(document.getElementById('work-time').value) * 60; // convert to seconds
        const numberOfBreaks = parseInt(document.getElementById('breaks').value);
        const breakLength = parseInt(document.getElementById('break-length').value) * 60; // convert to seconds

        // Validate inputs
        if (isNaN(workTime) || workTime <= 0 || numberOfBreaks < 0 || isNaN(breakLength) || breakLength <= 0) {
            alert('Please enter valid values for all fields.');
            return;
        }

        // Start the work session


        // Optionally, start the background logic here if necessary
        startBackground(workTime);
    });
});

// Function to start the background logic (if needed)
function startBackground(workTime) {
    chrome.action.setPopup({ popup: 'running.html' });
    startWorkSession(workTime);
}
