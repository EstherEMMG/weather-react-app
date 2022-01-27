import React from "react";

export default function Forecast() {
  return (
    <div className="container">
      <div className="col-2">
        <div className="card">
          <div className="card-body">
            <div className="weather-forecast-day">Mon</div>
            <img
              src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
              alt=""
              width="42"
            />
            <div className="weather-forecast-temp">
              <span className="max-temp">12</span>
              <span className="min-temp"> 2º</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
