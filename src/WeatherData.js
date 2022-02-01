import React from "react";
import WeatherUnits from "./WeatherUnits";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
  return (
    <div className="container row">
      <div className="card col-7">
        <div className="card-body">
          <h2>
            <WeatherUnits celsius={props.data.temperature} />
            <WeatherIcon code={props.data.icon} size={52} />
          </h2>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      <div className="col-5">
        <h1>{props.data.city}</h1>
        <h4>
          <span>
            <FormattedDate date={props.data.date} />
          </span>
        </h4>
        <h4>
          <span className="text-capitalize">{props.data.description}</span>
        </h4>
      </div>
    </div>
  );
}
