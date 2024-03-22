import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperture from "./weathertemperature";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6 ">
          <WeatherIcon code={props.data.icon}  />
          <WeatherTemperture
            celsius={props.data.temperature}
            
          />
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 45%</li>
            <li> Humidity: {props.data.humidity}%</li>
            <li> Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
