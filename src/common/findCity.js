import Axios from 'axios'

let ip = 'localhost'
let port = 3001

function findCity({city, province, leader, location}) {
    return Axios
        .get(`http://${ip}:${port}?city=${city}&province=${province}&leader=${leader}&location=${location}`)
        .catch((err) => alert('findCity: ' + err))
        .then(resolve => {
            return resolve.data.map(location => ({
                city: location.cityZh,
                province: location.provinceZh,
                leader: location.leaderZh,
            }))
        })
}

export default findCity