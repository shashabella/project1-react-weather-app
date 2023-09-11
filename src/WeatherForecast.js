import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="weatherForecast-temperature">
            <span className="weatherForecast-temperature-max">19°</span>
            <span className="weatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="weatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="weatherForecast-temperature">
            <span className="weatherForecast-temperature-max">19°</span>
            <span className="weatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}