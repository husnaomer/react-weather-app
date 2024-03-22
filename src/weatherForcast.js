import React from "react";
import "./weatherforecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function weatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weatherforecast">
      <div className="row">
        <div className="col">
          <div className="weatherforecast-day"> Thu</div>
          <WeatherIcon code="01d" size={38} />
          <div className="weatherforecast-temperature">
            <span className="weatherforecast-max">19° </span>
            <span className="weatherforecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
