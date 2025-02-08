let searchBox = document.querySelector(".searchBar input");
let searchBtn = document.querySelector(".searchBar button");
let weatherIcon = document.querySelector(".weatherIcon");

let apiKey = "3de60a0c78cbc273085876ed835ea115";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
   let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

   if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weatherInfo").style.display = "none";
      // document.querySelector(".weatherCard").style.background = "linear-gradient(to left bottom, #355957, #514465)";
      document.querySelector(".weatherCard").style.backgroundColor = "#d8dff3";
      document.querySelector(".searchBar input").style.backgroundColor = "rgba(255, 255, 255, 0.64)";
      document.querySelector(".searchBar button").style.backgroundColor = "rgba(255, 255, 255, 0.459)";
   }

   else {
      document.querySelector(".weatherCard").style.background = "linear-gradient(to left bottom, #70c1bd, #4d396c)";
      document.querySelector(".searchBar input").style.backgroundColor = "rgba(255, 255, 255, 0.810)";
      document.querySelector(".searchBar button").style.backgroundColor = "rgba(255, 255, 255, 0.810)";

      let data = await response.json();
      console.log(data);
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main == "Clouds") {
         weatherIcon.src = "images/clouds.png";
      }
      else if (data.weather[0].main == "Clear") {
         weatherIcon.src = "images/clear.png";
      }
      else if (data.weather[0].main == "Drizzle") {
         weatherIcon.src = "images/drizzle.png";
      }
      else if (data.weather[0].main == "Mist") {
         weatherIcon.src = "images/mist.png";
      }
      else if (data.weather[0].main == "Rain") {
         weatherIcon.src = "images/rain.png";
      }
      else if (data.weather[0].main == "Snow") {
         weatherIcon.src = "images/snow.png";
      }
      else if (data.weather[0].main == "Sunny") {
         weatherIcon.src = "images/sunny.png";
      }
      else if (data.weather[0].main == "Smoke") {
         weatherIcon.src = "images/mist.png";
      }

      document.querySelector(".weatherInfo").style.display = "block";
      document.querySelector(".error").style.display = "none";
   }
}

searchBtn.addEventListener("click", function () {
   checkWeather(searchBox.value);
})