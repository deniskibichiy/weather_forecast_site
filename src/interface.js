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
    const todayHourly = forecast[0].hours;
    todayHourly.forEach(element => {
        
    });

    const weeklyPredictionContainer = document.querySelector(".weekly");
    weeklyPredictionContainer.textContent = "";
    forecast.forEach(element => {
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
        };
        predictedPrecip.textContent = `Rain: ${element.precipprob}`;
        predictedTemperature.textContent = `Temp: ${element.temp}`;

        predictedDayDiv.appendChild(dayOfTheWeek);
        predictedDayDiv.appendChild(predictedIcon);
        predictedDayDiv.appendChild(predictedPrecip);
        predictedDayDiv.appendChild(predictedTemperature);

        weeklyPredictionContainer.appendChild(predictedDayDiv)
    });
}

export {displayWeather}