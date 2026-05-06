import "./style.css";


const API_KEY = "CWKX7FE9ENF5WTUYVUPRQEYKL";

async function fetchData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

    try {
        const request = await fetch(url);

        if (!request.ok) {
            throw new Error(`Response status: ${request.status}`);
        }
        const response = await request.json();
        return response;
    }
    catch (e) {
        console.error(e);
    }
}






