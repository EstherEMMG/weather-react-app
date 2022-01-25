import React from "react";

export default function Temperature(props) {
  function convertToFahr(event) {
    event.preventDefault();
    let fahreTemp = (props.temperature * 9) / 5 + 32;
    return Math.round(fahreTemp);
  }
  return (
    <div className="card col-6">
      <div className="card-body">
        <h2>
          <span className="maintemp"></span>
          <sup className="degrees">
            7 ºC |{" "}
            <a href="/" onClick={convertToFahr}>
              ºF
            </a>
          </sup>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          />
        </h2>
        <h6>Humidity: 12%</h6>
        <h6>Wind: 5km/h</h6>
      </div>
    </div>
  );
}
