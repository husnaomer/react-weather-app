import React, { useState } from "react";
import "./weathertemperature.css"
export default function WeatherTemperture(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenhiet(event) {
        event.preventDefault();
        setUnit("farenhiet");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function fahranhiet() {
        return (props.celsius * 9) / 5 + 32;
    }
    if (unit === "celsius"){
      return (
        <div className="weathertemperature">
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">
            °C |
            <a href="/" onClick={showFahrenhiet}>
              {" "}
              °F
            </a>
          </span>
        </div>
      );
    } else {
        return (
          <div className="weathertemperature">
            <span className="temperature">{Math.round(fahranhiet())}</span>
            <span className="unit">
              <a href="/" onClick={showCelsius}>
                {" "}
                °C{" "}
              </a>
              | °F
            </span>
          </div>
        );
        
    }
}
