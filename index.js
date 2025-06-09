const cityInput = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const icon = document.querySelector(".weatherIcon")

async function checkWheather(city) {

  const apiurl = "https://api.openweathermap.org/data/2.5/weather?q="
  const key = "&appid=b8c533b446719aba698e74bef0bd4d22"
  const response = await fetch(apiurl + city + key)

  if (response.status === 404) {
    document.querySelector(".city").innerHTML = "Invalid name"
    return;
  }

  const data = await response.json()

  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp - 273.15) + "ºC"
  document.querySelector(".city").innerHTML = data.name
  document.querySelector(".wind").innerHTML = (data.wind.speed * 3.6).toFixed(2) + " Km/h"
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
  switch (data.weather[0].main) {
    case "Clear":
      icon.src = "images/clear.png "
      break;
    case "Clouds":
      icon.src = "images/clouds.png "
      break;
    case "Drizzle":
      icon.src = "images/drizzle.png "
      break;
    case "Rain":
      icon.src = "images/rain.png "
      break;
    case "Snow":
      icon.src = "images/snow.png "
      break;
    case "Mist":
      icon.src = "images/mist.png "
      break;
  }
}



searchBtn.addEventListener("click", () => {
  const city = cityInput.value
  checkWheather(city)
})
