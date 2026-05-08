import "./style.css";
import { displayWeather } from "./interface";
import { processData } from "./fetch";

const button = document.querySelector("#search-button");
const userLocation = document.querySelector("#location");


button.addEventListener("click", showWeather);

async function showWeather() {
    const searchedLocation = userLocation.value;
    const forecast = await processData(searchedLocation);
    console.log(forecast);
    const weeklyData = forecast.slice(0,7);
    displayWeather(weeklyData);
};



