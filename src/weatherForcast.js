import React from "react";
import "./weatherforecast.css";
import WeatherIcon from "./WeatherIcon";
export default function weatherForcast() {
    return (
      <div className="weatherforecast">
        <div className="row">
          <div className="col">
            <div className="weatherforecast-day"> Thu</div>
                    <WeatherIcon code="01d" size={ 38} />
            <div className="weatherforecast-temperature">
              <span className="weatherforecast-max">19° </span>
              <span className="weatherforecast-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}
