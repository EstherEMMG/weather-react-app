import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahren(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={convertToFahren}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahrenTemp)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            ºC{" "}
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
