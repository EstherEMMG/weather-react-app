import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function CityInfo(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleRequest(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiKey = "ed8f1b521e1ef205ffa5fdddc628ab7e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleRequest);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter city name"
              onChange={handleCityUpdate}
            />
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <br />
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
