// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');

    if (modeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Add event listener for mode toggle switch
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('change', toggleMode);