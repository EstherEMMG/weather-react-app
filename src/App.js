import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Temperature from "./Temperature";
import CityInfo from "./CityInfo";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="card main-card">
      <div className="card-body">
        <Form />
        <br />
        <div className="container-md">
          <Temperature />
          <CityInfo />
        </div>
        <br />
        <div className="weather-forecast"></div>
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
