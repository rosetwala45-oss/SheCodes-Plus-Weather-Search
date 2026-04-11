// THE ONE FUNCTION THAT WILL UPDATE EVERYTHING:
function refreshWeather(response) {
  // update UI after call made
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
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
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

// -----------------------------------------------------------------------
// Call city on page load(default):
searchCity("Paris");
