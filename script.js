// DECLARING FUNCTIONS:

function handleSearchSubmit(event) {
  event.preventDefault();

  //   Getting input element
  let seachInput = document.querySelector("#search-form-input");

  // Replacng h1 with the value from input
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = seachInput.value;
}

// Setting a variable for the form:
let searchFormElement = document.querySelector("#search-form");

// What must happen when form is submitted:
searchFormElement.addEventListener("submit", handleSearchSubmit);
