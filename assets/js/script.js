
// Function to save input to local storage
function saveToLocalStorage(event) {
    event.preventDefault(); // Prevent the default form submission
    const userInput = document.getElementById('search-input').value;
    localStorage.setItem('userInput', userInput);
}

// Event listener for the input field
document.getElementById('search-form').addEventListener('submit', saveToLocalStorage);

// Load saved input from local storage on page load
window.addEventListener('load', function() {
    const savedInput = localStorage.getItem('userInput');
    if (savedInput) {
        document.getElementById('search-input').value = savedInput;
    } else {
        document.getElementById('search-input').value = '';
    }
});