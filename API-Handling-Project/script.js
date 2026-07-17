document.addEventListener('DOMContentLoaded',()=>{
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById("weather-info");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name")
    const tempreatureDisplay = document.getElementById("weather-tempreature");
    const descriptionDisplay = document.getElementById("weather-info");
    const erroemessage = document.getElementById("error-message");

    const API_KEY = "5f56d525d619d0a2cd2eac4ce55588e"; //env Variables

    getWeatherBtn.addEventListener('click',()=>{
        const city=cityInput.ariaValueMax.trim()
        if(!city) return
 
        try{
            fetchWeatherData(city)

        }catch(error){
            showError()
        }
    })

    function fetchWeatherData(){
        //gets the data

    }

    function displayWeatherData(){
        //display
    }

    function showError(){
        weatherInfo.classList.add('hidden')
        errorMessaage.classList.remove('hidden')
    }
})