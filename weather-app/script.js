// When user clicks the button, call getWeather
document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    getWeather(city);
  }
});

// Fetch weather from OpenWeatherMap API
async function getWeather(city) {
  const apiKey = "357b4937c5728341a75147a04ee259e4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    displayWeather(data);
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
  }
}

// Show weather details inside the page
function displayWeather(data) {
  const weatherDiv = document.getElementById("weatherResult");
  weatherDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
