// Function to toggle between light and dark mode//

function toggleMode(modeToggle) {
console.log(Math.random()) //added for troubleshooting function check

    const body = document.body;
    if (darkStatus == false) {  //if dark status is false
        darkStatus = true       //set it to true
        body.classList.add('dark-mode');//adds the class dark mode to the body element
        console.log("toggleModeCheck") //added for troubleshooting function check
    } else {
        darkStatus = false  //else set it false
        body.classList.remove('dark-mode');  //and remove dark mode styling
        console.log("toggleModeCheckelse") //added for troubleshooting function check, all console logs can be removed

    }
}

let darkStatus = false //sets the initial value to false to, used to keep track of current mode

// Add event listener for mode toggle switch//


const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', toggleMode);