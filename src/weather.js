import React from "react";
import "./weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            {" "}
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Kabul</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Mostly cloudy"
          />
          3°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 45%</li>
            <li> Humidity: 60%</li>
            <li> Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
