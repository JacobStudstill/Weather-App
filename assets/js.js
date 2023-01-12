var getStateBtn = document.getElementById('city-button')
var cityName = document.getElementById('city-name')
var cityTemp = document.getElementById('city-temp')
var cityWind = document.getElementById('city-wind')
var cityHumidity = document.getElementById('city-humidity')


function getState(){
    var cityEquals = document.getElementById('city-input').value
    console.log(cityEquals);
    var cityUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=575d8b41f8a1ee499e2844be6f9a6202&units=imperial&q=' + cityEquals;

    cityName.textContent = cityEquals

    fetch(cityUrl).then(function (response) {
            return response.json();
        })
        .then(function (data){
            cityTemp.textContent = "Temp: " + data.main.temp + " °F"
            cityWind.textContent = "Wind: " + data.wind.speed + " MPH"
            cityHumidity.textContent = "Humidity: " + data.main.temp + " %"
            
        })


    
}

// function fetchCurrentWeather(){
    
//     fetch(cityUrl).then(function (data) {
//         if(response.ok) {
//             console.log(data.main.temp)
//         }
//     })
// }







var getStateBtn = addEventListener("click", getState)
// fetchCurrentWeather()