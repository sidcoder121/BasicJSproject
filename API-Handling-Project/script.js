document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("weather-temperature"); // Fixed spelling
    const descriptionDisplay = document.getElementById("weather-description"); // Fixed ID conflict
    const errorMessage = document.getElementById("error-message"); // Fixed spelling

    const API_KEY = "5f56d525d619d0a2cd2eac4ce55588e"; 

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim(); // Changed ariaValueMax to value
        if (!city) return;
 
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    });

    async function fetchWeatherData(city) { // Added city parameter
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url); // Added await

        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) { // Passed data parameter
        console.log(data);
        const { name, main, weather } = data;
        
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `${main.temp}°C`;
        descriptionDisplay.textContent = weather[0].description;
        
        // Unlock the display
        weatherInfo.classList.remove('hidden'); // Fixed typo 'hiddent'
        errorMessage.classList.add('hidden');

        temperatureDisplay.textContent = `Tempreature: ${weather[0].description}`
    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden'); // Fixed toggle logic for errors
    }
});