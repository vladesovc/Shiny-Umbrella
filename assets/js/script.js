
// // Function to save input to local storage
// function saveToLocalStorage(event) {
//     event.preventDefault(); // Prevent the default form submission
//     const userInput = document.getElementById('search-input').value;
//     localStorage.setItem('userInput', userInput);
// }

// // Event listener for the input field
// document.getElementById('search-form').addEventListener('submit', saveToLocalStorage);

// // Load saved input from local storage on page load
// window.addEventListener('load', function() {
//     const savedInput = localStorage.getItem('userInput');
//     if (savedInput) {
//         document.getElementById('search-input').value = savedInput;
//     } else {
//         document.getElementById('search-input').value = '';
//     }
// });

// function searchWeather() {
//     const cityInput = document.getElementById('search-input').value;
//     // Call an API to get weather data for the cityInput
//     // Update the DOM with the weather information
//     // For simplicity, let's just display a message for now
//     alert('Displaying weather for: ' + cityInput);
//     // Update the search history
//     updateSearchHistory(cityInput);
//   }
  
//   function updateSearchHistory(city) {
//     const historyList = document.getElementById('history-list');
//     const listItem = document.createElement('li');
//     listItem.textContent = city;
//     listItem.addEventListener('click', function() {
//       // Call a function to fetch and display weather for the selected city
//       alert('Fetching weather for: ' + city);
//     });
//     historyList.appendChild(listItem);
//   }


const saveToLocalStorage = (event) => {
    event.preventDefault();
    const userInput = document.getElementById('search-input').value;
    localStorage.setItem('userInput', userInput);
    updateSearchHistory(userInput);  // Update search history when saving
};

document.getElementById('search-form').addEventListener('submit', saveToLocalStorage);

window.addEventListener('load', () => {
    const savedInput = localStorage.getItem('userInput');
    document.getElementById('search-input').value = savedInput || '';

    // Load and display search history on page load
    const historyList = document.getElementById('history-list');
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    savedHistory.forEach((city) => {
        const listItem = document.createElement('li');
        listItem.textContent = city;
        listItem.addEventListener('click', () => {
            alert('Fetching weather for: ' + city);
        });
        historyList.appendChild(listItem);
    });
});

const searchWeather = () => {
    const cityInput = document.getElementById('search-input').value;
    alert('Displaying weather for: ' + cityInput);
    updateSearchHistory(cityInput);
};

const updateSearchHistory = (city) => {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = city;
    listItem.addEventListener('click', () => {
        alert('Fetching weather for: ' + city);
    });
    historyList.appendChild(listItem);

    // Update and save search history
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    savedHistory.push(city);
    localStorage.setItem('searchHistory', JSON.stringify(savedHistory));
};

