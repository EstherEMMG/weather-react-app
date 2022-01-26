import React from "react";

export default function Forecast() {
  return (
    <div className="container">
      <div class="col-2">
        <div class="card">
          <div class="card-body">
            <div class="weather-forecast-day">Mon</div>
            <img
              src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
              alt=""
              width="42"
            />
            <div class="weather-forecast-temp">
              <span class="max-temp">12</span>
              <span class="min-temp"> 2º</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
