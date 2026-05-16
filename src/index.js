import "./style.css";
import { displayWeather } from "./interface";
import { processData } from "./fetch";

const button = document.querySelector("#search-button");
const userLocation = document.querySelector("#location");
const placeSearched = document.querySelector("#resolved-adress");

button.addEventListener("click", showWeather);

async function showWeather() {
  const searchedLocation = userLocation.value;
  const forecast = await processData(searchedLocation);
  const dailyHourly = forecast.hourlyData;
  const resolvedPlace = forecast.resolvedAddress;
  console.log(forecast.newFormattedDays[0]);
  const weeklyData = forecast.newFormattedDays.slice(0, 7);
  console.log(weeklyData[0]);
  placeSearched.textContent = resolvedPlace;
  displayWeather(weeklyData);
}

const hourlyWeather = [
  {
    datetime: "00:00:00",
    temp: 60.7,
    precipprob: 0,
    icon: "partly-cloudy-night",
  },
  {
    datetime: "01:00:00",
    temp: 60.7,
    precipprob: 0,
    icon: "partly-cloudy-night",
  },
  {
    datetime: "02:00:00",
    temp: 57.5,
    precipprob: 0,
    icon: "partly-cloudy-night",
  },
  {
    datetime: "03:00:00",
    temp: 69.7,
    precipprob: 0,
    icon: "partly-cloudy-night",
  },
  {
    datetime: "04:00:00",
    temp: 61.1,
    precipprob: 0,
    icon: "partly-cloudy-night",
  },
  {
    datetime: "05:00:00",
    temp: 59,
    precipprob: 0,
    icon: "partly-cloudy-night",
  },
  {
    datetime: "06:00:00",
    temp: 59.4,
    precipprob: 0,
    icon: "partly-cloudy-night",
  },
  {
    datetime: "07:00:00",
    temp: 59.4,
    precipprob: 0,
    icon: "partly-cloudy-day",
  },
  {
    datetime: "08:00:00",
    temp: 62.5,
    precipprob: 0,
    icon: "partly-cloudy-day",
  },
  {
    datetime: "09:00:00",
    temp: 64.8,
    precipprob: 0,
    icon: "partly-cloudy-day",
  },
  {
    datetime: "10:00:00",
    temp: 70.3,
    precipprob: 0,
    icon: "partly-cloudy-day",
  },
  {
    datetime: "11:00:00",
    temp: 73.6,
    precipprob: 100,
    icon: "rain",
  },
];
