import React from "react";

export default function CityInfo() {
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
              <span className="maintemp"></span>
              <sup className="degrees">
                7 ºC | <a href="/">ºF</a>
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
        <div className="col-5">
          <h1>Paris</h1>
          <h4>
            <span>Monday 20 12:02</span>
          </h4>
          <h4>
            <span>Sunny with some clouds</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
