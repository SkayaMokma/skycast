// Weatherbit API Key
const accessKey = "95755731d1ac4cf1a6c1be843b9b8b67"
const currentWeatherInput = document.getElementById("current-weather-input")
const currentWeatherSearchBar = document.getElementById("search-button")
const hiddenResponse = document.getElementById("result")
const cityOne = document.getElementById("city-one-name")
const cityOneTemp = document.getElementById("city-one-temp")
const cityTwo = document.getElementById("city-two-name")
const cityTwoTemp = document.getElementById("city-two-temp")
const cityThree = document.getElementById("city-three-name")
const cityThreeTemp = document.getElementById("city-three-temp")
const cityFour = document.getElementById("city-four-name")
const cityFourTemp = document.getElementById("city-four-temp")


// API request limit 


async function getWeather(){
  let cityValue = currentWeatherInput.value
  let resultCityName = document.getElementById("searched-city-name")
  let resultCityTemp = document.getElementById("searched-city-temp")
  let resultCityWeatherConditionsIcon = document.getElementById("weather-conditions-icon")

    let url = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=${cityValue}&units=I`

    const res = await fetch(url)
    let weatherData = await res.json()
    console.log(weatherData)
    hiddenResponse.removeAttribute("hidden")
    resultCityName.innerHTML = `${weatherData.data[0].city_name}, ${weatherData.data[0].state_code}`
    resultCityTemp.innerHTML = `${weatherData.data[0].temp} °F`

    let resultCityWeatherConditionsData = `${weatherData.data[0].weather.code}`
    
    if (resultCityWeatherConditionsData < 300){
      resultCityWeatherConditionsIcon.src = "https://cdn1.iconfinder.com/data/icons/weather-471/128/THUNDERSTORM-512.png"
    }
    else if (300 <= resultCityWeatherConditionsData < 600 ){
      resultCityWeatherConditionsIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png"
    }
    else if (600 <= resultCityWeatherConditionsData < 700){
      resultCityWeatherConditionsIcon.src = "https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/full_cloudy_snow-1024.png"
    } 
    else if (resultCityWeatherConditionsData == 800){
      resultCityWeatherConditionsIcon.src = "https://static.vecteezy.com/system/resources/previews/000/551/126/original/vector-sun-icon.jpg"
    } 
    else if (700 <= resultCityWeatherConditionsData < 800 || 801 <= resultCityWeatherConditionsData <= 900) {
      resultCityWeatherConditionsIcon.src = "https://tse1.mm.bing.net/th?id=OIP.1_PNYSfxg2MHtMSPRvKd8wHaHa&pid=Api&rs=1&c=1&qlt=95&w=117&h=117"
    }
    console.log(resultCityWeatherConditionsIcon.src)
  }

  currentWeatherSearchBar.addEventListener("click", getWeather)

async function displayWeather(){

  const cityOne = document.getElementById("city-one-name")
  const cityOneTemp = document.getElementById("city-one-temp")
  const cityTwo = document.getElementById("city-two-name")
  const cityTwoTemp = document.getElementById("city-two-temp")
  const cityThree = document.getElementById("city-three-name")
  const cityThreeTemp = document.getElementById("city-three-temp")
  const cityFour = document.getElementById("city-four-name")
  const cityFourTemp = document.getElementById("city-four-temp")

  let cityOneUrl = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=Raleigh,NC&units=I`
  const cityOneRes = await fetch(cityOneUrl)
  let cityOneWeatherData = await cityOneRes.json()
  console.log(cityOneWeatherData)

  cityOne.innerHTML = `${cityOneWeatherData.data[0].city_name}, ${cityOneWeatherData.data[0].state_code}`
  cityOneTemp.innerHTML = `${cityOneWeatherData.data[0].temp} °F`
  

  let cityTwoUrl = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=Chicago,Il&units=I`
  const cityTwoRes = await fetch(cityTwoUrl)
  let cityTwoWeatherData = await cityTwoRes.json()
  console.log(cityTwoWeatherData)

  cityTwo.innerHTML = `${cityTwoWeatherData.data[0].city_name}, ${cityTwoWeatherData.data[0].state_code}`
  cityTwoTemp.innerHTML = `${cityTwoWeatherData.data[0].temp} °F`

  let cityThreeUrl = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=Seattle,WA&units=I`
  const cityThreeRes = await fetch(cityThreeUrl)
  let cityThreeWeatherData = await cityThreeRes.json()
  console.log(cityThreeWeatherData)

  cityThree.innerHTML = `${cityThreeWeatherData.data[0].city_name}, ${cityThreeWeatherData.data[0].state_code}`
  cityThreeTemp.innerHTML = `${cityThreeWeatherData.data[0].temp} °F`

  let cityFourUrl = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=Phoenix,AZ&units=I`
  const cityFourRes = await fetch(cityFourUrl)
  let cityFourWeatherData = await cityFourRes.json()
  console.log(cityFourWeatherData)

  cityFour.innerHTML = `${cityFourWeatherData.data[0].city_name}, ${cityFourWeatherData.data[0].state_code}`
  cityFourTemp.innerHTML = `${cityFourWeatherData.data[0].temp} °F`
  
}


displayWeather()


function CtoF(){
  
  // is returning the entire HTML instead of just the number value
  let cityOneTemp1 = document.getElementById("city-one-temp").innerHTML
  let cityTwoTemp2 = document.getElementById("city-two-temp").innerHTML
  let cityThreeTemp3 = document.getElementById("city-three-temp").innerHTML
  let cityFourTemp4 = document.getElementById("city-four-temp").innerHTML

  let cityTemps = [cityOneTemp1, cityTwoTemp2, cityThreeTemp3, cityFourTemp4]
  let cityTempsCelsius = []
  
  for (let i = 0; i < cityTemps.length; i++){
    cityTempsCelsius.push(Math.round((cityTemps[i] -32)*5/9))
  }
  cityOneTemp.innerHTML = `${cityTempsCelsius[0]} °C`
  cityTwoTemp.innerHTML = `${cityTempsCelsius[1]} °C`
  cityThreeTemp.innerHTML = `${cityTempsCelsius[2]} °C`
  cityFourTemp.innerHTML = `${cityTempsCelsius[3]} °C`
}

document.getElementById("temp-converter").addEventListener("click", CtoF)