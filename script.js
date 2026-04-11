// THE ONE FUNCTION THAT WILL UPDATE EVERYTHING

function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  //make api call and update the UI
  let apiKey = "0dc6tacc431o670b15e9a5cb213feec1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();

  //   Getting input element
  let searchInput = document.querySelector("#search-form-input");
  // Replacng h1 with city from API

  // Geiing value for API call
  searchCity(searchInput.value);
}

// Setting a variable for the form:
let searchFormElement = document.querySelector("#search-form");
// What must happen when form is submitted:
searchFormElement.addEventListener("submit", handleSearchSubmit);

// Call city on page load:
searchCity("Paris");
