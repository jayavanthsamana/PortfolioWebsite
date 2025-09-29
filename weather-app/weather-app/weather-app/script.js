// Replace with your own OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><b>Temperature:</b> ${data.main.temp}°C</p>
      <p><b>Condition:</b> ${data.weather[0].main} (${data.weather[0].description})</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
    `;

    document.getElementById("weatherResult").innerHTML = weatherHtml;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
