function fetchWeather() {
    const apiKey ='c75091111105d39aba0a75bc2e54c09c'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();
  
    if (!city) {
      alert('Please enter a city name.');
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weather-data');
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
  
    const weatherHtml = `
      <p><strong>Weather:</strong> ${weatherDescription}</p>
      <p><strong>Temperature:</strong> ${temperature} °C</p>
      <p><strong>Humidity:</strong> ${humidity} %</p>
      <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;
  
    weatherDataDiv.innerHTML = weatherHtml;
  }
