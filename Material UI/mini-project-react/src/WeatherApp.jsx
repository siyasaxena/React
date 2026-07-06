import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    feelslike_c: 26,
    humidity: 54,
    localtime: "2026-07-06 13:41",
    temp_c: 24.9,
    temp_f: 76.8,
    weather: "Sunny",
    wind_kph: 22.3,
    city: "Delhi",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
