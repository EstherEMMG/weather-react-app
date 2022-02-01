import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}º`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}º`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="card-body">
      <div className="weather-forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="weather-forecast-temp">
        <span className="max-temp">{maxTemp()}</span>
        <span className="min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
