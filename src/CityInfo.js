import React, { useState } from "react";
import axios from "axios";

export default function CityInfo() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleRequest(response) {
    setWeatherData({
      ready: true,
      date: "Monday 20 12:02",
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Form">
          <form>
            <input type="text" placeholder="Enter city name" />
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <br />
        <div className="container row">
          <div className="card col-7">
            <div className="card-body">
              <h2>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">
                  ºC | <a href="/">ºF</a>
                </span>
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </h2>
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <h1>{weatherData.city}</h1>
            <h4>
              <span>{weatherData.date}</span>
            </h4>
            <h4>
              <span className="text-capitalize">{weatherData.description}</span>
            </h4>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ed8f1b521e1ef205ffa5fdddc628ab7e";
    let city = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleRequest);
    return "Loading...";
  }
}
