// THE ONE FUNCTION THAT WILL UPDATE EVERYTHING

function searchCity(city) {
  //make api call and update the UI
  let apiKey = "0dc6tacc431o670b15e9a5cb213feec1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();

  //   Getting input element
  let searchInput = document.querySelector("#search-form-input");
  // Replacng h1 with the value from input
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  // Geiing value for API call
  searchCity(searchInput.value);
}

// Setting a variable for the form:
let searchFormElement = document.querySelector("#search-form");
// What must happen when form is submitted:
searchFormElement.addEventListener("submit", handleSearchSubmit);
