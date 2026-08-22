const city=document.getElementById("city");
const search=document.getElementById("search");
const h2=document.getElementById("h2");
const p=document.getElementById("p");
const h21=document.getElementById("h21");
const p1=document.getElementById("p1");
h2.innerText="Place Details"
h21.innerText="Place Weather"
async function showWeather() {
    p.innerText = "Loading...";
    p1.innerText = "Loading...";

    const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city.value}&count=1&language=en&format=json`
    );

    if (locationResponse.ok===false) {
        p.innerText = "Something went wrong";
        p1.innerText = "";
        return;
    }

    const weatherData = await locationResponse.json(); 

    console.log(typeof(weatherData)); //array which stores object

    if (weatherData.results===undefined) {
        p.innerText = "City not found";
        p1.innerText = "";
        return;
    }

    const result = weatherData.results[0];

    p.innerText = `
        Country : ${result.country}

        Latitude : ${result.latitude} 

        Longitude : ${result.longitude}

        Elevation : ${result.elevation}

        Country Code: ${result.country_code}
    `;

    const weatherResponse = await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`    );

    if (weatherResponse.ok===false) {
        p1.innerText = "Could not get weather data";
        return;
    }

    const data = await weatherResponse.json();

    p1.innerText = `
        Time : ${data.current.time}

        Temperature : ${data.current.temperature_2m} Celsius

        Humidity : ${data.current.relative_humidity_2m} %

        Wind Speed : ${data.current.wind_speed_10m} km/h

        Timezone : ${data.timezone}
    `;
}
search.addEventListener("click",showWeather);

