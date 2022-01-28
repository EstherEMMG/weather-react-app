import React from "react";
import ReactDOM from "react-dom";
import CityInfo from "./CityInfo";
import Footer from "./Footer";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="card main-card">
      <div className="container">
        <div className="card-body">
          <div className="container-md">
            <CityInfo defaultCity="Madrid" />
          </div>
          <br />
          <div className="weather-forecast"></div>
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
