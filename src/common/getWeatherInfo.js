import axios from 'axios'

function getWeatherInfo(city) {
    return axios
        .get(`https://free-api.heweather.com/v5/weather?city=${city}&key=de3f25819a7b4427a4ca71d7cb1e9491`)
        .then(resolve => {
            let data = resolve.data.HeWeather5[0]
            return data.status === 'ok' ? data : null
        })
}

export default getWeatherInfo