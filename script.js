// THE ONE FUNCTION THAT WILL UPDATE EVERYTHING:
function refreshWeather(response) {
  // update UI after call made
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let timeElement = document.querySelector("#time");
  let timestamp = response.data.time;
  let date = new Date(timestamp * 1000);
  timeElement.innerHTML = formatDate(date);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;

  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;
}

function formatDate(date) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayName = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${dayName} ${hours}:${minutes}`;
}

function searchCity(city) {
  //make api call and update the UI
  let apiKey = "0dc6tacc431o670b15e9a5cb213feec1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  // will give us input parameter for searchCity function to be used in API call
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

// -------------------FORECAST FUNCTION--------------------
function displayForecast() {
  // Use loop to replicate for each day
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastElement = document.querySelector("#forecast");
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
 <div class="weather-forecast-day">
              <div class="weather-forecast-date">${day}</div>
              <div class="weather-forecast-icon">🌦️</div>
              <div class="weather-forecast-temperatures">
                <div class="weather-forecast-temperature"><strong>18°</strong></div>
                <div class="weather-forecast-temperature">6°</div>
              </div>
            </div>
`;
  });
  // To be run AFTER foreacstHtml
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

// -----------------------------------------------------------------------
// Call city on page load(default):
searchCity("miami");
displayForecast();
