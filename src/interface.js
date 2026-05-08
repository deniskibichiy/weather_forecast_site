import partlyCloudy from "./icons/partly-cloudy-day.png";
import rainy from "./icons/rain.png";
import cloudy from "./icons/cloudy.png";
import clearDay from "./icons/clear-day.png";


function displayWeather(forecast) {
    //render today's weather
    const currentContainer = document.querySelector("#today");
    const currentDay = document.createElement("h2");
    const currentIcon = document.createElement("img");
    const currentTemperature = document.createElement("p");
    const todayDescription = document.createElement("p");
    const today = forecast[0];
    currentDay.textContent = new Date(today.datetime).toLocaleDateString("en-US", { weekday: "long" });
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
    todayDescription.textContent = today.description;
    currentTemperature.textContent = today.temp;
    currentContainer.appendChild(currentDay);
    currentContainer.appendChild(todayDescription);
    currentContainer.appendChild(currentIcon);

    const weeklyPredictionContainer = document.querySelector(".weekly");
    forecast.forEach(element => {
        const predictedDayDiv = document.createElement("div");
        const dayOfTheWeek = document.createElement("h2");
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
        predictedPrecip.textContent = element.precipprob;
        predictedTemperature.textContent = element.temp;

        predictedDayDiv.appendChild(dayOfTheWeek);
        predictedDayDiv.appendChild(predictedIcon);
        predictedDayDiv.appendChild(predictedPrecip);
        predictedDayDiv.appendChild(predictedTemperature);

        weeklyPredictionContainer.appendChild(predictedDayDiv)
    });
}

export {displayWeather}