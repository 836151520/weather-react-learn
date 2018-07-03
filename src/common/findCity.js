import axios from 'axios'

function findCity(cityName) {
    return axios
        .get(`http://localhost:3000?getLocation=${cityName}`)
}

export default findCity