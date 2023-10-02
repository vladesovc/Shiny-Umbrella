

// function to save to local storage
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

    // display search history when page loads
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

