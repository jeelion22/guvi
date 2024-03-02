// create fetch api to get countries data from restcountries api
const rest_countries = fetch("https://restcountries.com/v3.1/all").then((readableStream)=>readableStream.json()).then((jsonData) =>{createBootStrapCard(jsonData)});

// define a function for geting weather details through the same fetch api and
// use openweathermap api for retriving weather data for specific lat. and long.
function getWeatherData (lat, lng, col) {
    let weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a87b392b9fc6be76b0a42dc5cc093147`).then((data)=>data.json()).then((data1) =>insertData(data1, col) )

}

// insert data from openweatherapi into specific elements
function insertData(data1, col) {


    let tempInCelsius = (data1.main.temp - 273).toFixed(1)    
    let temp = col.querySelector("#temp");
    temp.innerHTML = `Temperature: ${tempInCelsius} &deg;C`
    let humidity = col.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${data1.main.humidity}%`
    let wind = col.querySelector("#wind");
    wind.innerHTML = `Windspeed: ${data1.wind.speed} m/s`
    let visibility = col.querySelector("#visibility")
    visibility.innerHTML = `Visibility: ${data1.visibility} m`
   
    let weather = col.querySelector("#weather");
    weather.innerHTML = `Weather: ${data1.weather[0].description}`


}

// create a container and 
let container = document.createElement("div");
container.className = "container";
let row = document.createElement("div");
row.className = "row"


// create a function for creating crads using bootstrap4.6
function createBootStrapCard(jsonData) {

    for (let obj of jsonData) {
        

        let col = document.createElement("div");
        col.className = "col-lg-4 col-sm-12"

        col.innerHTML = `
        
        <div class="card" style="width: 18rem;">
        <div class="card-head"><h5 class="card-title text-center" id="title">${obj.name.common}</h5></div>
        <img src="${obj.flags.png}" class="card-img-top img-thumbnail" alt="country flag">
        <div class="card-body">

        <p id="capital" class="card-text">Capital: ${"capital" in obj ?obj.capital[0]: "Not Available"}</p>
        <p class="card-text" id="region">Region: ${obj.region}<p>
        <p class="card-text" id="country-code">Country Code: ${obj.altSpellings[0]}<p>     
        <a href="#" class="btn btn-primary">Click for Weather</a>

        <div class="weather-info">
        <div class="content"><div class="numerals">
        <p id="temp">Temperature: </p>
        <p id="humidity">Humidity: </p>
        <p id="wind">Wind: </p>
        <p id="visibility">Visibility: </p>
        <p id="weather">Weather: </p>
        </div>
      
   
        </div>
      </div>`;

      // call the function retriving data from the api and append it corresponding 
      // elements

      getWeatherData(obj.latlng[0], obj.latlng[1], col)
      
      row.append(col);
      let btn = col.querySelector(".btn");
      btn.addEventListener("click", (event)=>{
        event.preventDefault()
        let weather_info = col.querySelector(".weather-info");
        let btn = col.querySelector('.btn');

        // if the button is "Click for Weather", then the specific box will be in
        // hidden, once it is clicked, the button goes to "Cancel", the "weather-info"
        // block will be visible
       
        if (weather_info.style.display === "none" || weather_info.style.display ==="") {
            weather_info.style.display = "block";
            btn.textContent = "Cancel"
        } else {
            weather_info.style.display = "none";
            btn.textContent = "Click for Weather";
        }

      })

      // At the end, append all elements to the container
      // then continer to the body of the document

      container.append(row);
      document.body.append(container)
    }

    

}