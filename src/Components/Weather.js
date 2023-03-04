import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../redux/action";
import store from "../redux/store";


function Weather() {
  const display = useSelector((store) => store.display);
  const {city} = useParams()
  const dispatch = useDispatch();

  const [weatherData, setWeatherData] = useState(null);
  // const location = useLocation();
  const apiKey = "60a731bccb1c45f781d33504230403";

  const [unit, setUnit] = useState("C");


 

  useEffect(() => {
    async function fetchData() {
      // const city = new URLSearchParams(location.search).get("city");
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    }
    fetchData();
  }, [city, apiKey]);

      // window.localStorage.setItem("C", weatherData.current.temp_c);
      // window.localStorage.setItem("F", weatherData.current.temp_f)

  



  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const { icon } = weatherData.current.condition;



  // const handleClick = () => {
  //   setWeatherData(!weatherData);
  // };

  return (
    <>
      <h1 className="weatherdata">Weather Data</h1>
      {/* <div className="checkox">
      <input  className="celsius" type="checkbox" />
      Celsius
      <input className="Fahrenheit" type="checkbox" />
      Fahrenheit
      </div> */}
      {/* <Button onClick={handleClick}>{display ? "Turn off" : "Turn on"}</Button> */}
      <div className="checkox">
      <button className="button1" variant="dark" onClick={() => dispatch(show())}>
         Celsius
      </button>
      <button className="button2" variant="dark" onClick={() => dispatch(hide())}>
        Fahrenheit
      </button>
      </div>
      {display ? (
        <div className="details">
          <h1>
            {weatherData.location.name}, {weatherData.location.region}
          </h1>
          <div>
            <b className="bold">Current temperature: {weatherData.current.temp_c}°C</b>
          </div>
          <div>
            <b>latitude:{weatherData.location.lat}, longitude:
            {weatherData.location.lon}</b>
          </div>
          <div><b>Local Time: {weatherData.location.localtime}</b></div>

          <div>
            <b>Current condition: {weatherData.current.condition.text}</b>
            <img src={icon} alt="icon" height={20} />
          </div>
          <img src={icon} alt="icon" height={100} />
          <div><b>Humidity: {weatherData.current.humidity}</b></div>
          <div><b>Wind PerHour: {weatherData.current.wind_kph}</b></div>
          <div><b>Pressure: {weatherData.current.pressure_in}</b></div>
        </div>
      ) : (
        <div className="details">
          <h1>
            {weatherData.location.name}, {weatherData.location.region}
          </h1>
          <div>
            <b className="bold">Current temperature: {weatherData.current.temp_f}F</b>
          </div>
          <div><b>
            latitude:{weatherData.location.lat}, longitude:
            {weatherData.location.lon}</b>
          </div>
          <div><b>Local Time: {weatherData.location.localtime}</b></div>

          <div>
            <b>Current condition: {weatherData.current.condition.text}</b>
            <img src={icon} alt="icon" height={20} />
          </div>
          <img src={icon} alt="icon" height={100} />
          <div><b>Humidity: {weatherData.current.humidity}</b></div>
          <div><b>Wind PerHour: {weatherData.current.wind_kph}</b></div>
          <div><b>Pressure: {weatherData.current.pressure_in}</b></div>
        </div>
      )}
    </>
  );
}

export default Weather;
