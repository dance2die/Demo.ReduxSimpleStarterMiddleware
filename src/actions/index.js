import axios from 'axios';

// https://home.openweathermap.org/api_keys
const API_KEY = 'b7c24e2eb5ba5411d2dd3f7844928d7b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // "request" is a promise
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        // When Redux sees a promise as a payload, 
        // it stops the execution until the promise is resolved.
        // And then it sends the payload to reducers.
        payload: request
    }
}
