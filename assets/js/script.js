var apiKey = "3b6aa88a00246df22cc8e637f75bdae4"

// function to save to local storage
const saveToLocalStorage = (city) => {
    localStorage.setItem('userInput', city);
    updateSearchHistory(city);  // Update search history when saving
};

window.addEventListener('load', () => {
    // display search history when page loads
    const historyList = document.getElementById('history-list');
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    savedHistory.forEach((city) => {
        const listItem = document.createElement('li');
        listItem.textContent = city;
        listItem.addEventListener('click', () => {
            fetchWeather(city);
        });
        historyList.appendChild(listItem);
    });
});

const searchWeather = (event) => {
    event.preventDefault();
    const cityInput = document.getElementById('search-input').value;
    saveToLocalStorage(cityInput);
    fetchWeather(cityInput);
};

const displayCurrentWeather = (data) => {
    const currentWeather = document.getElementById("currentWeather");
    currentWeather.innerHTML = ""
    const cityName = document.createElement("h2");
    const date = document.createElement("h2");
    const icon = document.createElement("img");
    const temp = document.createElement("p");
    const humidity = document.createElement("p");
    const wind = document.createElement("p");
    cityName.textContent = data.name;
    date.textContent = dayjs.unix(data.dt).format("MM/DD/YY");
    icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    temp.textContent = `Temperature: ${data.main.temp} F`;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;
    wind.textContent = `Wind Speed: ${data.wind.speed} mph`;
    currentWeather.append(cityName, date, icon, temp, humidity, wind);
}

const fetchWeather = (cityInput) => {
    var apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${cityInput}&units=imperial`;
    fetch(apiUrlWeather).then(response => response.json()).then(data => {
        console.log(data);
        displayCurrentWeather(data);
    })
}
const updateSearchHistory = (city) => {
    let savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Add the new city to the history
    savedHistory.push(city);

    // Keep only the latest 10 entries
    if (savedHistory.length > 10) {
        savedHistory = savedHistory.slice(savedHistory.length - 10);
    }

    localStorage.setItem('searchHistory', JSON.stringify(savedHistory));

    // Display the updated search history
    displaySearchHistory(savedHistory);
};

const displaySearchHistory = (history) => {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';  // Clear existing history

    history.forEach((city) => {
        const listItem = document.createElement('li');
        listItem.textContent = city;
        listItem.addEventListener('click', () => {
            fetchWeather(city);
        });
        historyList.appendChild(listItem);
    });
};

document.getElementById('search-form').addEventListener('submit', searchWeather);

