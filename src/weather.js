import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    });
    setLoaded(true);
  }

  if (loaded) {
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
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>{weather.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6 ">
            {" "}
            <img
              src={weather.iconUrl}
              alt={weather.description}
              className="pb-4"
            />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Precipitation: 45%</li>
              <li> Humidity: {weather.humidity}%</li>
              <li> Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "63214c4281922e3bb72fdf12dada7734";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loaded....";
  }
}
