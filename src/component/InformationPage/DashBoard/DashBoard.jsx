import React from "react";
import "@styles/InformationPage/InformationPage.css";

const DashBoard = props => {
  const { location, current } = props.store;
  return (
    <div className={"info-location"}>
      <div className={"titelInfo"}>
        <h2>{location.name}</h2>
        <img src={current.weather_icons} />
      </div>
      <div>{location.localtime}</div>
      <div>
        <p>Temparature:</p> <p>{current.temperature}</p>
      </div>
      <div>
        <p>Wind Speed:</p> <p>{current.wind_speed}км/ч</p>
      </div>
      <div>
        <p>Wind Direction:</p> <p>{current.wind_dir}</p>
      </div>
      <div>
        <p>Pressure:</p> <p>{current.pressure} MB</p>
      </div>
      <div>
        <p>Humidity:</p> <p>{current.humidity}%</p>
      </div>
      <div>
        <p>{current.weather_descriptions}</p>
      </div>
      <div>
        <p>Cloud Cover:</p>
        <p>{current.cloudcover}</p>
      </div>
      <div>
        <p>UV Index:</p>
        <p>{current.uv_index}</p>
      </div>
    </div>
  );
};

export default React.memo(DashBoard);
