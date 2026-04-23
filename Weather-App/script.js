const apiKey = "1c7c6fe08eceaabee42fe52a6ab9175d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      Math.round(data.wind.speed) + " km/h";

    const weatherImages = {
      Clouds: "images/clouds.png",
      Clear: "images/clear.png",
      Rain: "images/rain.png",
      Drizzle: "images/drizzle.png",
      Mist: "images/mist.png",
    };
    weatherIcon.src = weatherImages[data.weather[0].main];
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
