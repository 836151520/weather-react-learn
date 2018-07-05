import axios from 'axios'

function findCity({city, province, leader, location}) {
    return axios
        .get(`http://localhost:3000?city=${city}&province=${province}&leader=${leader}&location=${location}`)
        .then(resolve => {
            return resolve.data.map(location => ({
                city: location.cityZh,
                province: location.provinceZh,
                leader: location.leaderZh,
            }))
        })
}

export default findCity