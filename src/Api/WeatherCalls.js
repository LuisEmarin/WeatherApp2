const API_KEY = "c9a5062f17e3e62297238c89b47260b3";
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams,appid:API_KEY});

    return fetch(url)
    .then((res) => res.json)
    // .then((data) => data);

}
const formatCurrentWeather = (data) => {
    const {
        coor: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset,details, icon,speed}
}
const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily= daily.slice(1,6).map()
}

const getFormattedWeatherData  = async (searchParams) => {
    const formattedCurrentWeather = await  getWeatherData('weather', searchParams).then(formatCurrentWeather)
    const {lat, lon} = formattedCurrentWeather
    const formattedForecastWeather = await getWeatherData('onecall',{
        lat, lon, exlude: 'current,minutely, alerts', units: searchParams.units
    }).then(formatForecastWeather)
    return formattedCurrentWeather
}
export default getFormattedWeatherData;