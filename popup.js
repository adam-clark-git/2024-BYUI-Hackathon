document.getElementById('start-btn').addEventListener('click', function () {
    // Get values from input fields
    const workTime = parseInt(document.getElementById('work-time').value);
    const numberOfBreaks = parseInt(document.getElementById('breaks').value);
    const breakLength = parseInt(document.getElementById('break-length').value);
  
    // Log the values (or replace with session start logic)
    console.log(`Work time set to: ${workTime} minutes`);
    console.log(`Number of breaks set to: ${numberOfBreaks}`);
    console.log(`Break length set to: ${breakLength} minutes`);
  
    // Additional logic to start the session can be added here
  });
  