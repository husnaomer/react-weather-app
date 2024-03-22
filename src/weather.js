import React, { useState } from "react";

import WeatherInfo from "./weatherInfo";
import axios from "axios";
import "./weather.css";
export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
    setLoaded(true);
  }
  function search() {
    const apiKey = "4b3503b2f08a729413c4d33ef1186004";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function getCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={getCity}
              />
            </div>
            <div className="col-3">
              {" "}
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();

    return "Loaded....";
  }
}
