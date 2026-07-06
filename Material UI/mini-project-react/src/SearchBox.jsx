import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_Url = "https://api.weatherapi.com/v1";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_Url}/current.json?key=${API_KEY}&q=${city}&units=metric`,
      );
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      let result = {
        temp_c: jsonresponse.current.temp_c,
        temp_f: jsonresponse.current.temp_f,
        feelslike_c: jsonresponse.current.feelslike_c,
        humidity: jsonresponse.current.humidity,
        weather: jsonresponse.current.condition.text,
        wind_kph: jsonresponse.current.wind_kph,
        localtime: jsonresponse.location.localtime,
        city: jsonresponse.location.name,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(city);
    setError(false);
    try {
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
      setCity("");
    } catch {
      setError(true);
    }
  };

  return (
    <>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <Button variant="contained" type="submit">
            Send
          </Button>
          {error && <p style={{ color: "red" }}>No such place exists!!</p>}
        </form>
      </div>
    </>
  );
}
