WELCOME TO SHINY UMBRELLA! THE WORLDS BEST WEATHER FORECASTING APPLICATION

LINK TO THE DEPLOYED WEBSITE:
https://vladesovc.github.io/Shiny-Umbrella/

This is an interactive weather forecasting app that allows the user to input a city of their choosing and the application will pull the weather data for that city for the current time and for the 5day forcast, you can search any city in the world, although spelling will matter! 

Description:
ON this website, you will find a main header welcoming you to the Weather Dashboard, from there you wull see a search input box and 2 results boxes.The search niput is for th euser to type in the city of their choice to see the weather. Once input they can click or hit enter and via the weather API we will pull that cities current forecast along with the 5day forecast. This will display and clear with each new city that the user searches while alos saving up to their last 10 city searches. They can also click on those prior searched cities to quickly pull up the weather data as well. 

Usage:
For a traveller to check the weather for the current and future conditions so they can properly plan their trip, or plans. 

Credits:
N/A

License:
Please refer to the LICENSE in the repo

Application Screeshots:

![image](https://github.com/vladesovc/Shiny-Umbrella/assets/144492864/ea040ca6-ef3a-41f7-942e-1d3ff4f8e323)


![image](https://github.com/vladesovc/Shiny-Umbrella/assets/144492864/be0df019-fb35-40c3-9b1e-a37bec8f097f)


PSeudoCode 

1. Setup HTML structure for the page, initiailizes JS variables
    - create layout sections for the search form, current weather data, forecast data, search history list
    - define API_key variable for the openweather Api
    - define base url for the api
    - create var to store references to HTML elements (e.g, searchform, cityinput, currentWeatherContainer, forecastContainer, searchHistoryContainer)

2. Event Listener for form submission
    - add submit event listener to the searchForm element
    - prevent the default form submission
    - get users input (what they type in cityInput element)
    - call a function (e.g, fetchWeatherData) with the users input

3. Fetch weather data from OpenWeather API (fetchWeatherData function)
    - construct Api URL that we are going to be fetching using usersInput and Api_Key
    - fetch data from the API using the constructed URL
    - parse the JSON response
    - handle errors (e.g, if the city is not found)

4. Display current weather conditions (displayCurrentWeather function)
    - Extract the relevent data from the Api response (city name, date, icon for weather, temp, humidity, and wind speed)
    - create HTML elements to display this data
    - update the currentWeatherContainwr with the HTML elements

5. Display 5 day forecast (displayForecast function)
    - 5 day forecast requires lat and long, so we need to figure out how to extract lat and long from our currentWeather response
    - Extract the 5 day forecast data from the api response
    - Loop through the forecast dataand for each of those days, creat HTML elements to display (date, icon, temp, windspeed, humidity)
    - Append these Elements to a forecastContainer

6. Update our search history (updateSearchHistory function)
    - add the searched city to the searchHistory array
    - Store the search history array in local storage (setItem)

7. We need to display the search history (displaySearchHistory function)
    - Loop through the searchHistory array and create a clickable list of cities in the searchHistoryContainer
    - add event listeners to the list of items to allow our users to click and view data for a previous search

8. Event Listener for search history
    - add a click event listener to the searchHistoryContainer
    - when a city is clicked call the fetchWeatherData function with the selected city

9. Initial Page load
    - Load the search history from local storage and display it using displaySearchHistory function


