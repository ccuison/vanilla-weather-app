function displayTemperature(response) {
  console.log(response);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidity");
  let humidityPercentage = `${humidity}%`;
  humidityElement.innerHTML = humidityPercentage;
  let speed = Math.round(response.data.wind.speed);
  let speedElement = document.querySelector("#speed");
  let windSpeed = `${speed} km/h`;
  speedElement.innerHTML = windSpeed;
}

let apiKey = "399e957e8f76382378f1ff5b0308246a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
