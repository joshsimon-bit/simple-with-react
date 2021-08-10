import "./styles.css";
import React, { useState } from "react";

const api = {
  key: "ec4dad51eab476dec704bba6d272840f",
  base: "https://api.openweathermap.org/data/2.5/"
};

export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          console.log(result);
          setWeather(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  };

  return (
    <div className="App">
      <h1>simple.</h1>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div classname="date"> {dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}F</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
            <li>
              <ul>Wednesday</ul>
              <ul>Thursday</ul>
              <ul>Friday</ul>
              <ul>Saturday</ul>
              <ul>Sunday</ul>
              <ul>Monday</ul>
              <ul>Tuesday</ul>
              <button href="https://www.accuweather.com/">
                Search A better App
              </button>
            </li>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
