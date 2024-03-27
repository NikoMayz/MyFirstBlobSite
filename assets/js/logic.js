// Function to toggle between light and dark mode//

function toggleMode(modeToggle) {
console.log(Math.random())

    const body = document.body;
    if (darkStatus == false) {
        darkStatus = true
        body.classList.add('dark-mode');
        console.log("toggleModeCheck")
    } else {
        darkStatus = false
        body.classList.remove('dark-mode');
        console.log("toggleModeCheckelse")

    }
}

let darkStatus = false

// Add event listener for mode toggle switch//


const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', toggleMode);