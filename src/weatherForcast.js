import React, {useState, useEffect} from "react";
import "./weatherforecast.css";

import WeatherForecastDay from "./weatherforecastday";
import axios from "axios";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);
 
  if(loaded){
    return (
      <div className="weatherforecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if(index < 6){
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
})}

         
        </div>
      </div>
    );
  } else {
     let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
     let longitude = props.coord.lon;
     let latitude = props.coord.lat;
     let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
