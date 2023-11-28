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

// searchbar function to get weather from input

async function getWeather(){
  let cityValue = currentWeatherInput.value
  let resultCityName = document.getElementById("searched-city-name")
  let resultCityTemp = document.getElementById("searched-city-temp")
  let resultCityWeatherConditionsIcon = document.getElementById("weather-conditions-icon")

    let url = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=${cityValue}&units=I`

    const res = await fetch(url)
    let weatherData = await res.json()
    console.log(weatherData)
    
    // displays the search response box 
    hiddenResponse.removeAttribute("hidden")

    // fixes display issue for Washington D.C.
    if (`${weatherData.data[0].state_code}` === 'DC'){
        resultCityName.innerHTML = `${weatherData.data[0].city_name}`
    } 
    // international city displays country instead of state
    else if (isNaN(parseInt(weatherData.data[0].state_code)) === false){
        resultCityName.innerHTML = `${weatherData.data[0].city_name}, ${weatherData.data[0].country_code}`
    } 
    // cities in US display state
    else {
        resultCityName.innerHTML = `${weatherData.data[0].city_name}, ${weatherData.data[0].state_code} - ${weatherData.data[0].country_code}`
    }
    
    // displays weather data in search response box
    resultCityTemp.innerHTML = `${weatherData.data[0].temp} °F`
    let resultCityWeatherConditionsData = `${weatherData.data[0].weather.code}`
    
    // different weather conditions display different weather images in the search response box
    // the numbers are different codes listed in the API documentation: https://www.weatherbit.io/api/codes

    // thunderstorms
    if (resultCityWeatherConditionsData < 300){
      resultCityWeatherConditionsIcon.src = "https://cdn1.iconfinder.com/data/icons/weather-471/128/THUNDERSTORM-512.png"
    }
    // rain
    else if (300 <= resultCityWeatherConditionsData && resultCityWeatherConditionsData < 600 ){
      resultCityWeatherConditionsIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png"
    }
    // snow
    else if (600 <= resultCityWeatherConditionsData && resultCityWeatherConditionsData < 700){
      resultCityWeatherConditionsIcon.src = "https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/full_cloudy_snow-1024.png"
    } 
    // sunny / clear sky
    else if (resultCityWeatherConditionsData === 800){
      resultCityWeatherConditionsIcon.src = "https://static.vecteezy.com/system/resources/previews/000/551/126/original/vector-sun-icon.jpg"
    } 
    // cloudy
    else if (700 <= resultCityWeatherConditionsData < 800 || 801 <= resultCityWeatherConditionsData <= 900) {
      resultCityWeatherConditionsIcon.src = "https://tse1.mm.bing.net/th?id=OIP.1_PNYSfxg2MHtMSPRvKd8wHaHa&pid=Api&rs=1&c=1&qlt=95&w=117&h=117"
    }
  }

  currentWeatherSearchBar.addEventListener("click", getWeather)

  // displays the default cities upon initial page load
async function displayWeather(){

  const cityOne = document.getElementById("city-one-name")
  const cityOneTemp = document.getElementById("city-one-temp")
  const cityTwo = document.getElementById("city-two-name")
  const cityTwoTemp = document.getElementById("city-two-temp")
  const cityThree = document.getElementById("city-three-name")
  const cityThreeTemp = document.getElementById("city-three-temp")
  const cityFour = document.getElementById("city-four-name")
  const cityFourTemp = document.getElementById("city-four-temp")


  // Raleigh, NC
  let cityOneUrl = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=Raleigh,NC&units=I`
  const cityOneRes = await fetch(cityOneUrl)
  let cityOneWeatherData = await cityOneRes.json()
  console.log(cityOneWeatherData)

  cityOne.innerHTML = `${cityOneWeatherData.data[0].city_name}, ${cityOneWeatherData.data[0].state_code}`
  cityOneTemp.innerHTML = `${cityOneWeatherData.data[0].temp} °F`
  
  // Chicago, IL
  let cityTwoUrl = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=Chicago,Il&units=I`
  const cityTwoRes = await fetch(cityTwoUrl)
  let cityTwoWeatherData = await cityTwoRes.json()
  console.log(cityTwoWeatherData)

  cityTwo.innerHTML = `${cityTwoWeatherData.data[0].city_name}, ${cityTwoWeatherData.data[0].state_code}`
  cityTwoTemp.innerHTML = `${cityTwoWeatherData.data[0].temp} °F`

  // Seattle, WA
  let cityThreeUrl = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=Seattle,WA&units=I`
  const cityThreeRes = await fetch(cityThreeUrl)
  let cityThreeWeatherData = await cityThreeRes.json()
  console.log(cityThreeWeatherData)

  cityThree.innerHTML = `${cityThreeWeatherData.data[0].city_name}, ${cityThreeWeatherData.data[0].state_code}`
  cityThreeTemp.innerHTML = `${cityThreeWeatherData.data[0].temp} °F`

  // Phoenix, AZ
  let cityFourUrl = `https://api.weatherbit.io/v2.0/current?key=${accessKey}&city=Phoenix,AZ&units=I`
  const cityFourRes = await fetch(cityFourUrl)
  let cityFourWeatherData = await cityFourRes.json()
  console.log(cityFourWeatherData)

  cityFour.innerHTML = `${cityFourWeatherData.data[0].city_name}, ${cityFourWeatherData.data[0].state_code}`
  cityFourTemp.innerHTML = `${cityFourWeatherData.data[0].temp} °F`
  
}

displayWeather()


// attempting to add a Celsius/Fahrenheit converter button

// function CtoF(){
  
//   // is returning the entire HTML instead of just the number value
//   let cityOneTemp1 = document.getElementById("city-one-temp").innerHTML
//   let cityTwoTemp2 = document.getElementById("city-two-temp").innerHTML
//   let cityThreeTemp3 = document.getElementById("city-three-temp").innerHTML
//   let cityFourTemp4 = document.getElementById("city-four-temp").innerHTML

//   const cityTempsFahrenheit = [cityOneTemp1, cityTwoTemp2, cityThreeTemp3, cityFourTemp4]
//   const cityTempsCelsius = [Math.round(cityOneTemp1*9/5+32), Math.round(cityTwoTemp2*9/5+32), Math.round(cityThreeTemp3*9/5+32), Math.round(cityFourTemp4*9/5+32) ]

// }

//   for (let i = 0; i < cityTemps.length; i++){
//     cityTempsFahrenheit.push(cityTemps[i])
//     cityTempsCelsius.push(Math.round((cityTemps[i] -32)*5/9))
//   }
    
    // if (cityTemps[0] !== 10){
    //     for (let i = 0; i < cityTemps.length; i++){
    //             cityTemps[i] = Math.round((cityTemps[i]*9/5)+32)
    //             console.log(cityTemps)
    //     }
    //         cityOneTemp.innerHTML = `${cityTemps[0]}`
    //         cityTwoTemp.innerHTML = `${cityTemps[1]}`
    //         cityThreeTemp.innerHTML = `${cityTemps[2]}`
    //         cityFourTemp.innerHTML = `${cityTemps[3]}`


    //     } else {
    //         for (let i = 0; i < cityTemps.length; i++){
    //         cityTemps[i] = Math.round((cityTemps[i] -32)*5/9)
    //         console.log(cityTemps)
    //         }
    //         cityOneTemp.innerHTML = `${cityTemps[0]}`
    //         cityTwoTemp.innerHTML = `${cityTemps[1]}`
    //         cityThreeTemp.innerHTML = `${cityTemps[2]}`
    //         cityFourTemp.innerHTML = `${cityTemps[3]}`
    //     }
        // console.log(cityTempsCelsius)
        // console.log(cityTempsFahrenheit)
    // }

// document.getElementById("temp-converter").addEventListener("click", CtoF)