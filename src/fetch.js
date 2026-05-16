const API_KEY = "CWKX7FE9ENF5WTUYVUPRQEYKL";

async function fetchData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?include=days,hours&elements=datetime,temp,description,icon,precipprob&key=${API_KEY}`;

  try {
    const request = await fetch(url);

    if (!request.ok) {
      throw new Error(`Response status: ${request.status}`);
    }
    const response = await request.json();
    return response;
  } catch (e) {
    console.error(e);
  }
}

async function processData(place) {
  const data = await fetchData(place);
  const newFormattedDays = data.days.map((day) => {
    const date = new Date(day.datetime);
    return {
      ...day,
      dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
    };
  });
  const hourlyData = data.days[0].hours;
  const resolvedAddress = data.resolvedAddress;
  return { newFormattedDays, hourlyData, resolvedAddress };
}

export { processData };
