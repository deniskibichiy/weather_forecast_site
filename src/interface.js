import partlyCloudy from "./icons/partly-cloudy-day.png";
import rainy from "./icons/rain.png";
import cloudy from "./icons/cloudy.png";
import clearDay from "./icons/clear-day.png";

function displayWeather(forecast) {
  //render today's weather
  const currentContainer = document.querySelector("#today");
  currentContainer.classList.remove("hidden");
  const currentDay = document.querySelector("#date");
  const currentIcon = document.querySelector("#today-icon");
  const currentTemperature = document.querySelector("#temp-today");
  const today = forecast[0];
  console.log(forecast[0].hours);
  currentDay.textContent = `${today.dayName}, ${today.datetime}`;
  switch (today.icon) {
    case "rain":
      currentIcon.src = rainy;
      break;
    case "cloudy":
      predictedIcon.src = cloudy;
      break;
    case "partly-cloudy-day":
      currentIcon.src = partlyCloudy;
      break;
    default:
      currentIcon.src = clearDay;
      break;
  }
  currentTemperature.textContent = `${today.temp}`;
  //currentContainer.appendChild(currentDay);
  //currentContainer.appendChild(currentIcon);

  //Hourly prediction render

  const hourlyContainer = document.querySelector(".hourly");
  hourlyContainer.textContent = "";
  const todayHourly = forecast[0].hours;
  todayHourly.forEach((element, index) => {
    if (index % 4 !== 0) return;

    const predictedHour = splitString(element.datetime);

    const divHourly = document.createElement("div");
    divHourly.classList.add("hourDiv");

    const hourlyIcon = document.createElement("img");
    const hourlyTime = document.createElement("span");
    const hourlyTemp = document.createElement("span");

    // time
    hourlyTime.textContent = predictedHour;

    switch (element.icon) {
      case "rain":
        hourlyIcon.src = rainy;
        break;
      case "cloudy":
        hourlyIcon.src = cloudy;
        break;
      case "partly-cloudy-day":
        hourlyIcon.src = partlyCloudy;
        break;
      default:
        hourlyIcon.src = clearDay;
        break;
    }

    divHourly.appendChild(hourlyIcon);
    divHourly.appendChild(hourlyTime);
    divHourly.appendChild(hourlyTemp);

    hourlyContainer.appendChild(divHourly);
  });

  const weeklyPredictionContainer = document.querySelector(".weekly");
  weeklyPredictionContainer.textContent = "";
  forecast.forEach((element) => {
    const predictedDayDiv = document.createElement("div");
    const dayOfTheWeek = document.createElement("p");
    const predictedIcon = document.createElement("img");
    const predictedPrecip = document.createElement("p");
    const predictedTemperature = document.createElement("p");
    dayOfTheWeek.textContent = element.dayName;
    switch (element.icon) {
      case "rain":
        predictedIcon.src = rainy;
        break;
      case "cloudy":
        predictedIcon.src = cloudy;
        break;
      case "partly-cloudy-day":
        predictedIcon.src = partlyCloudy;
        break;
      default:
        predictedIcon.src = clearDay;
        break;
    }
    predictedPrecip.textContent = `Rain: ${element.precipprob}`;
    predictedTemperature.textContent = `Temp: ${element.temp}`;

    predictedDayDiv.appendChild(dayOfTheWeek);
    predictedDayDiv.appendChild(predictedIcon);
    predictedDayDiv.appendChild(predictedPrecip);
    predictedDayDiv.appendChild(predictedTemperature);

    weeklyPredictionContainer.appendChild(predictedDayDiv);
  });
}

function splitString(timeStr) {
  const hour = Number(timeStr.split(":")[0]);

  const formattedHour = String(hour).padStart(2, "0");

  return `${formattedHour}00 hours`;
}

export { displayWeather };
