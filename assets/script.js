var apiKey = "0c802c8424d5c53d49a3fab3fa08b431";

var searchBtn = document.querySelector("#searchBtn");
var city = document.querySelector("#city");
var temp = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windSpeed = document.querySelector("#wind-speed");
var uvIndex = document.querySelector("#uv-index");
var forecast = document.querySelector("#forecast");

function citySearch(event) {
  event.preventDefault();

  var searchedCity = document.querySelector("#citySearch").value;
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=imperial`;
  var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=${apiKey}&units=imperial`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      city.textContent = data.name;
      temp.textContent =
        "Temperature: " + Math.round(data.main.temp) + "\u00B0 F";
      humidity.textContent = "Humidity:" + Math.round(data.main.humidity) + "%";
      windSpeed.textContent =
        "Wind Speed:" + Math.round(data.wind.speed) + "mph";
      console.log(data);
    });

  fetch(forecastUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      forecast.textContent = data.main[0];
    });
}

var form = document.querySelector("#searchForm");
form.addEventListener("submit", citySearch);

//one call URL for UV index
//forecast URL
//local storage for city names
